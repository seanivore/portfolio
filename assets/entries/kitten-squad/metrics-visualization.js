// Project metrics data
const projectData = {
    milestones: [
        {
            phase: 'PlayStation Launch',
            downloads: 200000,
            engagement: 45
        },
        {
            phase: 'iOS Release',
            downloads: 400000,
            engagement: 65
        },
        {
            phase: 'Android Launch',
            downloads: 700000,
            engagement: 78
        },
        {
            phase: 'Windows Release',
            downloads: 1000000,
            engagement: 85
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('metrics-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: projectData.milestones.map(m => m.phase),
            datasets: [
                {
                    label: 'Total Downloads',
                    data: projectData.milestones.map(m => m.downloads),
                    borderColor: '#8884d8',
                    tension: 0.1,
                    yAxisID: 'downloads'
                },
                {
                    label: 'Engagement Score',
                    data: projectData.milestones.map(m => m.engagement),
                    borderColor: '#82ca9d',
                    tension: 0.1,
                    yAxisID: 'engagement'
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                downloads: {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Total Downloads'
                    }
                },
                engagement: {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Engagement Score'
                    }
                }
            }
        }
    });

    // Add key achievements and project management cards
    const metricsContainer = document.getElementById('metrics-container');
    
    const achievementsCard = document.createElement('div');
    achievementsCard.className = 'metrics-card';
    achievementsCard.innerHTML = `
        <h3>Key Achievements</h3>
        <ul>
            <li>Cross-platform expansion to 4 major platforms</li>
            <li>20% growth in download rate post-campaign</li>
            <li>1M+ total downloads achieved</li>
            <li>Maintained 3.4+ App Store rating</li>
        </ul>
    `;

    const managementCard = document.createElement('div');
    managementCard.className = 'metrics-card';
    managementCard.innerHTML = `
        <h3>Project Management</h3>
        <ul>
            <li>Development team liaison</li>
            <li>Content strategy & legal review</li>
            <li>Multi-platform launch coordination</li>
            <li>Ongoing maintenance & updates</li>
        </ul>
    `;

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'metrics-cards-container';
    cardsContainer.appendChild(achievementsCard);
    cardsContainer.appendChild(managementCard);
    
    metricsContainer.appendChild(cardsContainer);
});