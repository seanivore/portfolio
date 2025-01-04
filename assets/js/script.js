// Tag System Management
class TagSystem {
    constructor() {
        this.activeTag = null;
        this.tagButtons = document.querySelectorAll('.tag-ui');
        this.projectCards = document.querySelectorAll('.project-card');
        this.relatedProjectsSection = document.querySelector('.related-grid');
        
        // Tag groupings for similarity calculations
        this.tagGroups = {
            systems: ['system-architecture', 'web-development', 'system-integration', 
                     'technical-architecture', 'automation', 'infrastructure',
                     'methodology', 'implementation', 'development'],
            
            strategy: ['business-strategy', 'process-strategy', 'innovation',
                      'risk-assessment', 'strategic-communication',
                      'viral', 'engagement', 'earned-media'],
            
            design: ['ux-ui', 'visual-design', 'product-design',
                    'user-behavior', 'interaction-design',
                    'creative-direction', 'motion-design'],
            
            ai: ['ai-development', 'ai-integration', 'ai-research',
                 'agentic', 'generative', 'automation',
                 'machine-learning', 'ai-systems'],
            
            theory: ['philosophy', 'ethics', 'critical-analysis',
                    'research-methods', 'systems-thinking',
                    'accessibility', 'futurism']
        };
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.tagButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleTagClick(button);
            });
        });
    }

    handleTagClick(buttonElement) {
        const clickedTag = buttonElement.textContent.trim();
        
        // Any click while a tag is active clears the filter
        if (this.activeTag !== null) {
            this.clearActiveState();
            return;
        }

        // First click activates the filter
        this.activeTag = clickedTag;
        this.tagButtons.forEach(btn => btn.classList.remove('selected'));
        buttonElement.classList.add('selected');
        this.filterProjects();
    }

    clearActiveState() {
        this.activeTag = null;
        this.tagButtons.forEach(btn => btn.classList.remove('selected'));
        this.showAllProjects();
    }

    showAllProjects() {
        this.projectCards.forEach(card => {
            this.showCard(card);
        });
    }

    // Maps masthead categories to numbers
    getCategoryNumber(category) {
        const categoryMap = {
            'Philosophy & Ethics': 1,
            'Systems Architecture': 2,
            'Industry Innovation': 3,
            'User-Behavior Design': 4,
            'Generative Production': 5,
            'Agentic Automation': 6,
            'AI Development': 7,
            'Product Design': 8
        };
        return categoryMap[category] || null;
    }

    filterProjects() {
        if (!this.activeTag) {
            this.showAllProjects();
            return;
        }

        const categoryNumber = this.getCategoryNumber(this.activeTag);
        if (!categoryNumber) return;

        this.projectCards.forEach(card => {
            const primaryCategories = card.dataset.categories?.split(',').map(n => parseInt(n.trim())) || [];
            
            if (primaryCategories.includes(categoryNumber)) {
                this.showCard(card);
            } else {
                this.hideCard(card);
            }
        });
    }

    showCard(card) {
        card.style.display = '';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 10);
    }

    hideCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }

    // Calculate similarity score for related projects
    calculateSimilarity(project1, project2) {
        const tags1 = this.getAllTags(project1);
        const tags2 = this.getAllTags(project2);
        let score = 0;

        // Check each tag group
        Object.values(this.tagGroups).forEach(group => {
            const matches1 = tags1.filter(tag => group.includes(tag));
            const matches2 = tags2.filter(tag => group.includes(tag));
            
            if (matches1.length > 0 && matches2.length > 0) {
                score += 1;
            }
        });

        // Add bonus for shared category numbers
        const categories1 = project1.dataset.categories?.split(',').map(n => parseInt(n.trim())) || [];
        const categories2 = project2.dataset.categories?.split(',').map(n => parseInt(n.trim())) || [];
        const sharedCategories = categories1.filter(cat => categories2.includes(cat));
        score += sharedCategories.length * 2;

        return score;
    }

    getAllTags(project) {
        const primaryTags = project.dataset.primaryTags?.split(' ') || [];
        const secondaryTags = project.dataset.secondaryTags?.split(' ') || [];
        return [...primaryTags, ...secondaryTags].map(tag => tag.toLowerCase());
    }

    updateRelatedProjects() {
        if (!this.relatedProjectsSection) return;

        const currentPath = window.location.pathname;
        const currentProject = Array.from(this.projectCards).find(card => {
            const link = card.querySelector('a').getAttribute('href');
            return currentPath.includes(link);
        });

        if (!currentProject) return;

        const otherProjects = Array.from(this.projectCards).filter(card => card !== currentProject);
        const projectScores = otherProjects.map(project => ({
            project,
            score: this.calculateSimilarity(currentProject, project)
        }));

        const relatedProjects = projectScores
            .sort((a, b) => b.score - a.score)
            .slice(0, 2)
            .map(item => item.project);

        // Clear and update related projects section
        this.relatedProjectsSection.innerHTML = '';
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
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

    const tagSystem = new TagSystem();
});