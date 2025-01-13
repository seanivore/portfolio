document.addEventListener('DOMContentLoaded', () => {
    // Find all chart containers with data-chart attributes
    const chartContainers = document.querySelectorAll('[data-chart]');
    
    chartContainers.forEach(async (container) => {
        try {
            // Create canvas for the chart
            const ctx = document.createElement('canvas');
            ctx.style.height = '600px';  // Taller default height
            container.appendChild(ctx);
            
            // Fetch the TSX data from the raw URL
            const response = await fetch(container.dataset.chart);
            const tsxContent = await response.text();
            
            // Debug: Log raw content
            console.log('Raw TSX content:', tsxContent);

            // Try different data patterns
            let chartConfig;
            
            // Pattern 1: Complete chart configuration export
            // First try to get the full configuration including separate data and options
            const fullConfig = {};
            
            // Get data object
            const dataMatch = tsxContent.match(/const\s+data\s*=\s*({[\s\S]*?});/);
            console.log('Data match:', dataMatch ? 'Found' : 'Not found');
            
            if (dataMatch) {
                try {
                    console.log('Raw data before processing:', dataMatch[1]);
                    let rawData = dataMatch[1].replace(/([{,]\s*)(\w+):/g, '$1"$2":');
                    // Replace single quoted strings with double quotes
                    rawData = rawData.replace(/'([^']*?)'/g, '"$1"');
                    // Remove comments
                    rawData = rawData.replace(/\/\/.*/g, '');
                    console.log('Processed data before parsing:', rawData);
                    fullConfig.data = JSON.parse(rawData);
                    console.log('Successfully parsed data:', fullConfig.data);
                } catch (e) {
                    console.error('Error parsing data object:', e);
                    console.log('Failed at data processing stage');
                }
            }
            
            // Get options object
            const optionsMatch = tsxContent.match(/const\s+options\s*=\s*({[\s\S]*?});/);
            console.log('Options match:', optionsMatch ? 'Found' : 'Not found');
            
            if (optionsMatch) {
                try {
                    console.log('Raw options before processing:', optionsMatch[1]);
                    const rawOptions = optionsMatch[1].replace(/([{,]\s*)(\w+):/g, '$1"$2":')
                        .replace(/:\s*'([^']*?)'/g, ':"$1"')
                        .replace(/:\s*function\s*\([^)]*\)\s*{[^}]*}/g, ':null'); // Remove functions temporarily
                    console.log('Processed options before parsing:', rawOptions);
                    fullConfig.options = JSON.parse(rawOptions);
                    console.log('Successfully parsed options:', fullConfig.options);
                } catch (e) {
                    console.error('Error parsing options object:', e);
                    console.log('Failed at options processing stage');
                }
            }
            
            // Get export configuration
            const configMatch = tsxContent.match(/export\s+default\s*({[\s\S]*?});/);
            console.log('Config match:', configMatch ? 'Found' : 'Not found');
            
            if (configMatch) {
                try {
                    console.log('Raw config before processing:', configMatch[1]);
                    // Create the chart config directly instead of parsing
                    chartConfig = {
                        type: 'bar',
                        data: fullConfig.data,
                        options: fullConfig.options
                    };
                    console.log('Created chart config:', chartConfig);
                } catch (e) {
                    console.error('Error parsing complete config:', e);
                    console.log('Failed at config processing stage');
                }
            }
            
            // Pattern 2: Simple data array
            if (!chartConfig) {
                console.log('Trying Pattern 2: Simple data array');
                const simpleDataMatch = tsxContent.match(/const\s+data\s*=\s*(\[[\s\S]*?\]);/);
                if (simpleDataMatch) {
                    try {
                        const rawData = simpleDataMatch[1].replace(/([{,]\s*)(\w+):/g, '$1"$2":')
                            .replace(/:\s*'([^']*?)'/g, ':"$1"');
                        const data = JSON.parse(rawData);
                        chartConfig = transformDataToChartConfig(data, container);
                        console.log('Successfully created config from simple data:', chartConfig);
                    } catch (e) {
                        console.error('Error parsing simple data array:', e);
                    }
                }
            }
            
            // Pattern 3: Complex data structure with tooltip items
            if (!chartConfig && tsxContent.includes('items:')) {
                console.log('Trying Pattern 3: Complex data structure');
                try {
                    const match = tsxContent.match(/data:\s*(\[[\s\S]*?\])/);
                    if (match) {
                        const rawData = match[1].replace(/([{,]\s*)(\w+):/g, '$1"$2":')
                            .replace(/:\s*'([^']*?)'/g, ':"$1"');
                        const data = JSON.parse(rawData);
                        chartConfig = transformComplexDataToChartConfig(data, container);
                        console.log('Successfully created config from complex data:', chartConfig);
                    }
                } catch (e) {
                    console.error('Error parsing complex data structure:', e);
                }
            }

            if (!chartConfig) {
                throw new Error('Could not parse chart data from TSX file');
            }

            // Apply common configuration options
            chartConfig = applyCommonConfig(chartConfig, container);
            console.log('Final chart config:', chartConfig);

            // Create the chart
            new Chart(ctx, chartConfig);
            
        } catch (error) {
            console.error('Error creating chart:', error);
            container.innerHTML = `<p class="error">Error loading chart: ${error.message}</p>`;
        }
    });
});

// Helper function to get consistent colors from our tag system
function getTagColor(type, alpha = 1) {
    const colors = {
        tech: '408A8F',    // tag-tech color
        strategy: 'E85021', // tag-strategy color
        ai: '7a8b69',      // tag-ai color
        secondary: '5f5655' // tag-secondary color
    };
    const color = colors[type] || colors.tech;
    return alpha === 1 ? 
        `#${color}` : 
        `rgba(${parseInt(color.substr(0,2),16)}, ${parseInt(color.substr(2,2),16)}, ${parseInt(color.substr(4,2),16)}, ${alpha})`;
}

// Transform simple data array into chart configuration
function transformDataToChartConfig(data, container) {
    const chartType = container.dataset.type || 'line';
    
    // Handle different data structures
    if (Array.isArray(data) && typeof data[0] === 'object') {
        const firstItem = data[0];
        const metrics = Object.keys(firstItem).filter(key => 
            key !== 'metric' && key !== 'phase' && key !== 'milestone'
        );
        
        return {
            type: chartType,
            data: {
                labels: data.map(item => item.metric || item.phase || item.milestone),
                datasets: metrics.map((metric, index) => ({
                    label: metric.charAt(0).toUpperCase() + metric.slice(1).replace(/([A-Z])/g, ' $1'),
                    data: data.map(item => item[metric]),
                    borderColor: getTagColor(index === 0 ? 'tech' : index === 1 ? 'strategy' : 'ai'),
                    backgroundColor: getTagColor(index === 0 ? 'tech' : index === 1 ? 'strategy' : 'ai', 0.1),
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }))
            }
        };
    }
    
    return null;
}

// Transform complex data structure with tooltip items
function transformComplexDataToChartConfig(data, container) {
    return {
        type: container.dataset.type || 'bar',
        data: {
            labels: data.map(d => d.x),
            datasets: [{
                label: container.dataset.title || 'Value',
                data: data,
                backgroundColor: data.map((d, i) => getTagColor(['tech', 'strategy', 'ai'][i % 3])),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const dataPoint = context.raw;
                            if (dataPoint.items) {
                                return dataPoint.items;
                            }
                            return `${context.dataset.label}: ${dataPoint.y || dataPoint.v}`;
                        }
                    }
                }
            }
        }
    };
}

// Apply common configuration options
function applyCommonConfig(config, container) {
    const baseConfig = {
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: container.dataset.title || '',
                    padding: {
                        top: 20,
                        bottom: 30
                    },
                    font: {
                        size: 16,
                        weight: 'normal'
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#1E2E46',
                    bodyColor: '#1E2E46',
                    borderColor: '#1E2E46',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            size: 14
                        },
                        padding: 10
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 14
                        },
                        maxRotation: 45,
                        padding: 10
                    }
                }
            }
        }
    };

    // Merge configurations
    return {
        type: config.type || container.dataset.type || 'line',
        data: config.data,
        options: {
            ...baseConfig.options,
            ...config.options,
            plugins: {
                ...baseConfig.options.plugins,
                ...(config.options?.plugins || {})
            },
            scales: {
                ...baseConfig.options.scales,
                ...(config.options?.scales || {})
            }
        }
    };
}