document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('performance-chart');
    if (!chartContainer) return;

    const ctx = document.createElement('canvas');
    chartContainer.appendChild(ctx);

    // Data for all three apps
    const data = {
        labels: ['Downloads', 'User Retention', 'Engagement Rate', 'Support Rating'],
        datasets: [{
            label: 'PETA Action App',
            data: [100, 85, 92, 96], // Normalized to percentages
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
        }, {
            label: 'Animal Rights Stickers',
            data: [75, 70, 88, 90],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }, {
            label: 'Bunny Free Database',
            data: [65, 82, 78, 85],
            backgroundColor: 'rgba(255, 205, 86, 0.7)',
            borderColor: 'rgb(255, 205, 86)',
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'App Performance Metrics'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
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
