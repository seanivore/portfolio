document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chart-container');
    if (!chartContainer) return;

    // Campaign metrics data
    const campaignData = [
        {
            name: 'Week 1',
            reach: 12000,
            engagement: 240,
            costPerEngagement: 0.003
        },
        {
            name: 'Week 2',
            reach: 15000,
            engagement: 350,
            costPerEngagement: 0.003
        },
        {
            name: 'Week 3',
            reach: 18000,
            engagement: 420,
            costPerEngagement: 0.003
        },
        {
            name: 'Week 4',
            reach: 22000,
            engagement: 510,
            costPerEngagement: 0.003
        }
    ];

    // Create canvas for Chart.js
    const ctx = document.createElement('canvas');
    chartContainer.appendChild(ctx);

    // Configure chart
    const config = {
        type: 'bar',
        data: {
            labels: campaignData.map(d => d.name),
            datasets: [
                {
                    label: 'Total Reach',
                    data: campaignData.map(d => d.reach),
                    backgroundColor: '#82ca9d',
                    yAxisID: 'y-reach'
                },
                {
                    label: 'Engagements',
                    data: campaignData.map(d => d.engagement),
                    backgroundColor: '#8884d8',
                    yAxisID: 'y-engagement'
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            scales: {
                'y-reach': {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Total Reach'
                    }
                },
                'y-engagement': {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Engagements'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Campaign Performance Overview'
                }
            }
        }
    };

    // Create the chart
    new Chart(ctx, config);
});