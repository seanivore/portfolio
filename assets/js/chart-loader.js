document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chart-container');
    if (!chartContainer) return;

    const chartPath = chartContainer.dataset.chart;
    if (!chartPath) return;

    // Create chart using Chart.js
    const ctx = document.createElement('canvas');
    chartContainer.appendChild(ctx);

    // Sample data structure (this would normally come from the .tsx file)
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'User Completion Rate',
            data: [40, 50, 60, 70, 80, 85],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }, {
            label: 'User Satisfaction',
            data: [45, 55, 65, 75, 82, 88],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'UX Metrics Over Time'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});
