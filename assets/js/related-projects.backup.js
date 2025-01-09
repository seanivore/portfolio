document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards with their data
    const allProjects = document.querySelectorAll('.project-card');
    if (!allProjects.length) return;

    // Get current page info
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '');

    // Get the related projects container
    const relatedGrid = document.querySelector('.related-grid');
    if (!relatedGrid) return;

    // Convert NodeList to Array and remove current page
    const projectsArray = Array.from(allProjects).filter(card => {
        const link = card.querySelector('a').getAttribute('href');
        return !link.includes(currentPage);
    });

    // Find matches based on tags and categories
    const matches = projectsArray
        .map(card => {
            const primaryTags = card.dataset.primaryTags?.split(' ') || [];
            const secondaryTags = card.dataset.secondaryTags?.split(' ') || [];
            const categories = card.dataset.categories?.split(',') || [];
            
            // Simple scoring: count shared tags and categories
            let score = 0;
            if (primaryTags.length) score += primaryTags.length;
            if (secondaryTags.length) score += secondaryTags.length * 0.5;
            if (categories.length) score += categories.length * 0.3;
            
            return { card, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 2); // Get top 2 matches

    // Ensure we have at least one match
    if (!matches.length) {
        matches.push({ card: projectsArray[0] }); // Just take the first project as fallback
    }

    // Create and insert related project cards
    matches.forEach(match => {
        const card = match.card;
        const title = card.querySelector('.project-title').textContent;
        const image = card.querySelector('img').src;
        const link = card.querySelector('a').getAttribute('href');
        const tags = card.querySelector('.tech-stack').innerHTML;

        const cardHtml = `
            <article class="project-card">
                <a href="${link}" class="project-card-link">
                    <div class="project-image">
                        <img src="${image}" alt="${title}">
                        <div class="image-overlay">
                            <h3 class="project-title">${title}</h3>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="tech-stack">
                            ${tags}
                        </div>
                    </div>
                </a>
            </article>
        `;
        relatedGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
});