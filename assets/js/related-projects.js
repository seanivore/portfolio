document.addEventListener('DOMContentLoaded', function() {
    // Project relationships map
    const projectRelations = {
        "social-advertising-strategy": [
            {
                title: "Multi-Platform Content Strategy Framework",
                link: "content-strategy-framework.html",
                image: "https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/content-strategy-framework/img-tile-content-strategy-framework.webp",
                tags: ["Innovation", "Strategy", "Earned Media"]
            },
            {
                title: "AI-Driven Narrative-Centric Fashion Design",
                link: "ai-fashion-strategy.html",
                image: "https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/ai-fashion-strategy/img-tile-ai-fashion-strategy.webp",
                tags: ["AI Automation", "Creative Direction", "Generative Design"]
            }
        ],
        "content-strategy-framework": [
            {
                title: "Meta Ads $0.003 Per Engagement",
                link: "social-advertising-strategy.html",
                image: "https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/social-advertising-strategy/img-tile-social-advertising-strategy.webp",
                tags: ["Automation", "Strategic Marketing", "Analytics"]
            },
            {
                title: "Real-Time Social Media Innovation",
                link: "realtime-social-system.html",
                image: "https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/realtime-social-system/img-tile-realtime-social-system.webp",
                tags: ["Innovation", "Viral", "Live Coverage"]
            }
        ]
    };

    // Get current page name from URL
    const pagePath = window.location.pathname;
    const pageName = pagePath.split('/').pop().replace('.html', '');
    
    // Get the related projects container
    const relatedGrid = document.querySelector('.related-grid');
    if (!relatedGrid) return;

    // Get related projects for current page
    const relatedProjects = projectRelations[pageName] || [];

    // Create related project cards
    relatedProjects.forEach(project => {
        const cardHtml = `
            <article class="project-card">
                <a href="${project.link}" class="project-card-link">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="image-overlay">
                            <h3 class="project-title">${project.title}</h3>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="tech-stack">
                            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                    </div>
                </a>
            </article>
        `;
        relatedGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
});