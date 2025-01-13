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
            
            // Try different data patterns
            let chartData;
            
            // Pattern 1: Direct data array
            const dataMatch = tsxContent.match(/const\s+data\s*=\s*(\[[\s\S]*?\]);/);
            
            // Pattern 2: Named array (like milestones)
            const milestonesMatch = tsxContent.match(/const\s+milestones\s*=\s*(\[[\s\S]*?\]);/);
            
            // Pattern 3: Component data structure
            const metricsMatch = tsxContent.match(/const\s+appsData\s*=\s*(\[[\s\S]*?\]);/);
            
            let dataArray;
            let rawData = '';
            if (dataMatch) {
                rawData = dataMatch[1];
            } else if (milestonesMatch) {
                rawData = milestonesMatch[1];
            } else if (metricsMatch) {
                // Handle appsData structure
                rawData = metricsMatch[1];
                try {
                    const appsData = JSON.parse(rawData.replace(/([{,]\s*)(\w+):/g, '$1"$2":')
                        .replace(/:\s*'([^']*?)'/g, ':"$1"'));
                    
                    // Transform appsData into chart format
                    // Extract all unique metric titles
                    const allMetrics = new Set();
                    appsData.forEach(app => {
                        app.metrics.forEach(metric => allMetrics.add(metric.title));
                    });
                    
                    // Create transformed data structure
                    chartData = {
                        labels: Array.from(allMetrics),
                        datasets: appsData.map((app, index) => ({
                            label: app.name,
                            data: Array.from(allMetrics).map(metricTitle => {
                                const metric = app.metrics.find(m => m.title === metricTitle);
                                if (!metric) return 0;
                                // Convert string values to numbers
                                const value = metric.value;
                                if (value.endsWith('%')) {
                                    return parseFloat(value);
                                }
                                if (value.endsWith('M+')) {
                                    return 100; // Normalize to percentage
                                }
                                if (value === 'Multi-million') {
                                    return 90; // Approximate for scale
                                }
                                if (value.includes('★')) {
                                    return parseFloat(value) * 20; // Convert 5-star to percentage
                                }
                                const num = parseFloat(value);
                                return isNaN(num) ? 0 : num;
                            }),
                            borderColor: getChartColor(index),
                            backgroundColor: getChartColor(index, 0.1),
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true,
                            pointRadius: 4,
                            pointHoverRadius: 6
                        }))
                    };
                } catch (e) {
                    console.error('Error parsing appsData:', e);
                    throw new Error('Failed to parse appsData structure');
                }
            } else {
                throw new Error('Could not find data structure in TSX file');
            }

            // If we don't have chartData yet (i.e., not from appsData), create it from rawData
            if (!chartData) {
                // Parse the data array
                dataArray = JSON.parse(rawData.replace(/([{,]\s*)(\w+):/g, '$1"$2":')
                    .replace(/:\s*'([^']*?)'/g, ':"$1"'));
                
                // Transform the data into chart format
                chartData = {
                    labels: [],
                    datasets: []
                };
                
                // Get all possible keys except the label key
                const labelKey = Object.keys(dataArray[0]).find(key => 
                    key.toLowerCase().includes('phase') || 
                    key.toLowerCase().includes('name') ||
                    key.toLowerCase().includes('milestone') ||
                    key.toLowerCase().includes('metric'));
                    
                const metricKeys = Object.keys(dataArray[0])
                    .filter(key => key !== labelKey)
                    .filter(key => typeof dataArray[0][key] === 'number');
                
                // Set up labels
                chartData.labels = dataArray.map(item => item[labelKey]);
                
                // Create a dataset for each metric
                chartData.datasets = metricKeys.map((key, index) => ({
                    label: key.replace(/([A-Z])/g, ' $1').trim(),
                    data: dataArray.map(item => item[key]),
                    borderColor: getChartColor(index),
                    backgroundColor: getChartColor(index, 0.1),
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }));
            }
            
            // Create the chart configuration
            const config = {
                type: container.dataset.type || 'line',
                data: chartData,
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
                                size: 18,
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
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return `${context.dataset.label}: ${context.raw}${container.dataset.format || ''}`;
                                }
                            }
                        }
                    },
                    scales: {
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
                        },
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.1)'
                            },
                            ticks: {
                                font: {
                                    size: 14
                                },
                                padding: 10,
                                callback: function(value) {
                                    return value + (container.dataset.format || '%');
                                }
                            }
                        }
                    }
                }
            };

            // Create the chart
            new Chart(ctx, config);
            
        } catch (error) {
            console.error('Error creating chart:', error);
            container.innerHTML = `<p class="error">Error loading chart: ${error.message}</p>`;
        }
    });
});

// Helper function to get consistent colors
function getChartColor(index, alpha = 1) {
    const colors = [
        '1E2E46', // Deep Blue
        '54b0af', // Cyan
        '7a8b69', // Green
        'E85021', // Orange
        '408A8F', // Teal
        '5f5655', // Brown
    ];
    const color = colors[index % colors.length];
    return alpha === 1 ? 
        `#${color}` : 
        `rgba(${parseInt(color.substr(0,2),16)}, ${parseInt(color.substr(2,2),16)}, ${parseInt(color.substr(4,2),16)}, ${alpha})`;
}