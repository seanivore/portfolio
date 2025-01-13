document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards with their data
    const allProjects = document.querySelectorAll('.project-card');
    if (!allProjects.length) return;
    const dataCard = document.querySelector('.project-card.data-card');
    if (!dataCard) return;
    const dataCard = document.querySelector('.project-card.data-card');
    if (!dataCard) return;
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '');

    // Get the related projects container
    const relatedGrid = document.querySelector('.related-grid');
    if (!relatedGrid) return;

    // Convert NodeList to Array and remove current page
    fetch('/index.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const allProjects = doc.querySelectorAll('.project-card:not(.data-card)');

            const projectsArray = Array.from(allProjects).filter(card => {
        const link = card.querySelector('a').getAttribute('href');
        return !link.includes(currentPage);
    });

    // Shuffle array (Fisher-Yates shuffle)
    for (let i = projectsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [projectsArray[i], projectsArray[j]] = [projectsArray[j], projectsArray[i]];
    }

    // Get 2 random projects, ensuring at least one has a shared category or tag if possible
    let matches = [];
    
    // Try to find at least one with shared attributes
    const currentCard = document.querySelector(\`.project-card[data-categories*="\${currentPage}"]\`);
            const currentCard = document.querySelector(`.project-card[data-categories*="${currentPage}"]`);
    if (currentCard) {
        const currentPrimaryTags = currentCard.dataset.primaryTags?.split(' ') || [];
        const currentSecondaryTags = currentCard.dataset.secondaryTags?.split(' ') || [];
                const currentCategories = currentCard.dataset.categories?.split(',') || [];
                const currentPrimaryTags = currentCard.dataset.primaryTags?.split(' ') || [];
                const currentSecondaryTags = currentCard.dataset.secondaryTags?.split(' ') || [];

        // Find first match with any similarity
        const similarProject = projectsArray.find(card => {
            const categories = card.dataset.categories?.split(',') || [];
            const primaryTags = card.dataset.primaryTags?.split(' ') || [];
            const secondaryTags = card.dataset.secondaryTags?.split(' ') || [];

            return categories.some(cat => currentCategories.includes(cat)) ||
                   primaryTags.some(tag => currentPrimaryTags.includes(tag)) ||
                   secondaryTags.some(tag => currentSecondaryTags.includes(tag));
        });

        if (similarProject) {
            matches.push(similarProject);
            projectsArray.splice(projectsArray.indexOf(similarProject), 1);
        }
    }

    // Add a random second project if we have one available
    if (projectsArray.length) {
        matches.push(projectsArray[0]);
    }

    // If we somehow got no matches, just take the first two (or one) available projects
    if (!matches.length && projectsArray.length) {
        matches = projectsArray.slice(0, 2);
    }

    // Create and insert related project cards
    matches.forEach(card => {
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