// Tag System Management
class TagSystem {
    constructor() {
        this.selectedTag = null;
        this.tagButtons = document.querySelectorAll('.tag-ui');
        this.projectCards = document.querySelectorAll('.project-card');
        this.relatedProjectsSection = document.querySelector('.related-grid');
        
        // Initialize from session storage
        this.initializeFromStorage();
        
        // Set up event listeners
        this.setupEventListeners();
    }

    initializeFromStorage() {
        const storedTag = sessionStorage.getItem('selectedTag');
        if (storedTag) {
            this.selectedTag = storedTag;
            this.updateUI();
        }
    }

    setupEventListeners() {
        // Add click handlers to all tag buttons
        this.tagButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const clickedTag = e.target.textContent.trim().toLowerCase();
                this.handleTagClick(clickedTag, e.target);
            });
        });
    }

    handleTagClick(clickedTag, buttonElement) {
        // If clicking the same tag, deselect it
        if (this.selectedTag === clickedTag) {
            this.selectedTag = null;
            buttonElement.classList.remove('selected');
            sessionStorage.removeItem('selectedTag');
        } else {
            // Remove selected class from all buttons
            this.tagButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Select the new tag
            this.selectedTag = clickedTag;
            buttonElement.classList.add('selected');
            sessionStorage.setItem('selectedTag', clickedTag);
        }

        this.updateUI();
    }

    updateUI() {
        this.projectCards.forEach(card => {
            // If no tag is selected, show all cards
            if (!this.selectedTag) {
                this.showCard(card);
                return;
            }

            // Get tags from data attributes
            const primaryTags = card.dataset.primaryTags?.split(' ') || [];
            const secondaryTags = card.dataset.secondaryTags?.split(' ') || [];
            const allTags = [...primaryTags, ...secondaryTags];

            // Check if card has the selected tag
            const hasTag = allTags.some(tag => 
                tag.toLowerCase().includes(this.selectedTag.toLowerCase().replace(/\s+/g, '-'))
            );

            if (hasTag) {
                this.showCard(card);
            } else {
                this.hideCard(card);
            }
        });

        // Update related projects if on a project page
        if (this.relatedProjectsSection) {
            this.updateRelatedProjects();
        }
    }

    showCard(card) {
        card.style.display = '';
        // Delay to trigger transition
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 10);
    }

    hideCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        // Wait for transition before hiding
        setTimeout(() => {
            card.style.display = 'none';
        }, 300); // Match transition duration in CSS
    }

    // Calculate similarity score between two projects
    calculateSimilarity(project1, project2) {
        const primary1 = project1.dataset.primaryTags?.split(' ') || [];
        const secondary1 = project1.dataset.secondaryTags?.split(' ') || [];
        const primary2 = project2.dataset.primaryTags?.split(' ') || [];
        const secondary2 = project2.dataset.secondaryTags?.split(' ') || [];

        let score = 0;

        // Primary tag matches weighted higher
        primary1.forEach(tag1 => {
            if (primary2.includes(tag1)) score += 3;
            if (secondary2.includes(tag1)) score += 1;
        });

        // Secondary tag matches
        secondary1.forEach(tag1 => {
            if (primary2.includes(tag1)) score += 1;
            if (secondary2.includes(tag1)) score += 0.5;
        });

        return score;
    }

    // Get related projects for current project
    getRelatedProjects(currentProject, count = 2) {
        const otherProjects = Array.from(this.projectCards).filter(card => 
            card !== currentProject
        );

        // Calculate similarity scores
        const projectScores = otherProjects.map(project => ({
            project,
            score: this.calculateSimilarity(currentProject, project)
        }));

        // Sort by score and take top N
        return projectScores
            .sort((a, b) => b.score - a.score)
            .slice(0, count)
            .map(item => item.project);
    }

    // Update related projects section
    updateRelatedProjects() {
        if (!this.relatedProjectsSection) return;

        const currentPath = window.location.pathname;
        const currentProject = Array.from(this.projectCards).find(card => {
            const link = card.querySelector('a').getAttribute('href');
            return currentPath.includes(link);
        });

        if (!currentProject) return;

        const relatedProjects = this.getRelatedProjects(currentProject);
        
        // Clear existing related projects
        this.relatedProjectsSection.innerHTML = '';

        // Add related projects
        relatedProjects.forEach(project => {
            const link = project.querySelector('a').getAttribute('href');
            const title = project.querySelector('.project-title').textContent;
            const description = project.querySelector('.project-content p').textContent;
            const tags = Array.from(project.querySelector('.tech-stack').children)
                .map(span => span.textContent);

            const relatedHtml = `
                <a href="${link}" class="related-card">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <div class="related-tags">
                        ${tags.map(tag => `<span class="related-tag">${tag}</span>`).join('')}
                    </div>
                </a>
            `;

            this.relatedProjectsSection.insertAdjacentHTML('beforeend', relatedHtml);
        });
    }
}

// Initialize tag system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add necessary CSS for transitions
    const style = document.createElement('style');
    style.textContent = `
        .project-card {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tag-ui {
            cursor: pointer;
        }
        .tag-ui.selected {
            background-color: rgba(0, 0, 0, 0.8);
        }
    `;
    document.head.appendChild(style);

    // Initialize tag system
    const tagSystem = new TagSystem();
});