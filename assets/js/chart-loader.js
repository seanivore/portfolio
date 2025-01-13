// chart-loader.js
document.addEventListener('DOMContentLoaded', () => {
    // Find all chart containers
    const chartContainers = document.querySelectorAll('.chart-container');
    
    chartContainers.forEach(container => {
        const chartId = container.id;
        
        // Create canvas for Chart.js
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        
        // Import the data file
        const script = document.createElement('script');
        script.src = `../assets/js/charts/${chartId}.js`;
        script.onload = () => {
            // Once data is loaded, create the chart
            createChart(canvas, window[chartId + '_data']);
        };
        document.head.appendChild(script);
    });
});

function createChart(canvas, data) {
    if (!data) return;
    
    const config = {
        type: 'line',
        data: {
            labels: data.map(d => d.phase || d.stage || d.category),
            datasets: Object.keys(data[0])
                .filter(key => key !== 'phase' && key !== 'stage' && key !== 'category')
                .map((key, index) => ({
                    label: key.replace(/([A-Z])/g, ' $1').trim(),
                    data: data.map(d => d[key]),
                    borderColor: getChartColor(index),
                    fill: false
                }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    };

    new Chart(canvas, config);
}

function getChartColor(index) {
    const colors = [
        '#1E2E46', // Deep Blue
        '#54b0af', // Cyan
        '#7a8b69', // Green
        '#E85021', // Orange
        '#408A8F', // Teal
        '#5f5655', // Brown
    ];
    return colors[index % colors.length];
}