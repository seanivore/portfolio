// Tag Relationship System
class RelatedProjectsSystem {
    constructor() {
        // Relationship scores matrix (1-50)
        this.relationshipMatrix = {
            // Systems & Architecture Group
            'system-architecture': {
                'web-development': 45,
                'system-integration': 50,
                'technical-architecture': 50,
                'automation': 40,
                'infrastructure': 45,
                'methodology': 35,
                'implementation': 40,
                'development': 40
            },
            'web-development': {
                'system-integration': 40,
                'technical-architecture': 35,
                'automation': 30,
                'infrastructure': 40,
                'methodology': 25,
                'implementation': 45,
                'development': 50
            },
            // Strategy & Innovation Group
            'business-strategy': {
                'process-strategy': 50,
                'innovation': 45,
                'risk-assessment': 40,
                'strategic-communication': 45,
                'viral': 30,
                'engagement': 35,
                'earned-media': 40
            },
            'innovation': {
                'process-strategy': 40,
                'risk-assessment': 35,
                'strategic-communication': 40,
                'viral': 35,
                'engagement': 40,
                'earned-media': 35
            },
            // Design & Experience Group
            'ux-ui': {
                'visual-design': 50,
                'product-design': 45,
                'user-behavior': 50,
                'interaction-design': 50,
                'creative-direction': 40,
                'motion-design': 35
            },
            // AI & Automation Group
            'ai-development': {
                'ai-integration': 50,
                'ai-research': 45,
                'agentic': 45,
                'generative': 40,
                'automation': 40,
                'machine-learning': 50,
                'ai-systems': 50
            },
            // Theory & Analysis Group
            'philosophy': {
                'ethics': 50,
                'critical-analysis': 45,
                'research-methods': 35,
                'systems-thinking': 40,
                'accessibility': 30,
                'futurism': 40
            }
        };

        // UI Category weights (1-8)
        this.categoryWeights = {
            1: { name: 'Philosophy & Ethics', weight: 1.3 },
            2: { name: 'Systems Architecture', weight: 1.2 },
            3: { name: 'Industry Innovation', weight: 1.4 },
            4: { name: 'User-Behavior Design', weight: 1.3 },
            5: { name: 'Generative Production', weight: 1.2 },
            6: { name: 'Agentic Automation', weight: 1.3 },
            7: { name: 'AI Development', weight: 1.4 },
            8: { name: 'Product Design', weight: 1.2 }
        };
    }

    // Get relationship score between two tags
    getTagScore(tag1, tag2) {
        if (this.relationshipMatrix[tag1]?.[tag2]) {
            return this.relationshipMatrix[tag1][tag2];
        }
        if (this.relationshipMatrix[tag2]?.[tag1]) {
            return this.relationshipMatrix[tag2][tag1];
        }
        return 0; // No direct relationship
    }

    // Calculate total relationship score between two projects
    calculateProjectScore(project1, project2) {
        let score = 0;
        
        // Primary tags comparison (double weight)
        const primaryTags1 = project1.dataset.primaryTags.split(' ');
        const primaryTags2 = project2.dataset.primaryTags.split(' ');
        
        primaryTags1.forEach(tag1 => {
            primaryTags2.forEach(tag2 => {
                score += this.getTagScore(tag1, tag2) * 2;
            });
        });

        // Secondary tags comparison (standard weight)
        const secondaryTags1 = project1.dataset.secondaryTags.split(' ');
        const secondaryTags2 = project2.dataset.secondaryTags.split(' ');
        
        secondaryTags1.forEach(tag1 => {
            secondaryTags2.forEach(tag2 => {
                score += this.getTagScore(tag1, tag2);
            });
        });

        // UI Category bonus
        const categories1 = project1.dataset.categories.split(',');
        const categories2 = project2.dataset.categories.split(',');
        
        categories1.forEach(cat1 => {
            if (categories2.includes(cat1)) {
                score *= this.categoryWeights[cat1].weight;
            }
        });

        return score;
    }

    // Find top 2 related projects
    findRelatedProjects(currentProject, allProjects) {
        const scores = [];
        
        allProjects.forEach(project => {
            if (project !== currentProject) {
                const score = this.calculateProjectScore(currentProject, project);
                scores.push({ project, score });
            }
        });

        // Sort by score and return top 2
        return scores
            .sort((a, b) => b.score - a.score)
            .slice(0, 2)
            .map(item => item.project);
    }

    // Initialize related projects functionality
    init() {
        const projectCards = document.querySelectorAll('.project-card');
        const currentProject = document.querySelector('.project-card[data-position="1"]');
        
        if (currentProject) {
            const relatedProjects = this.findRelatedProjects(currentProject, Array.from(projectCards));
            this.displayRelatedProjects(relatedProjects);
        }
    }

    // Display related projects in the UI
    displayRelatedProjects(relatedProjects) {
        const relatedGrid = document.querySelector('.related-grid');
        if (!relatedGrid) return;

        relatedProjects.forEach(project => {
            const card = this.createRelatedProjectCard(project);
            relatedGrid.appendChild(card);
        });
    }

    // Create HTML for related project card
    createRelatedProjectCard(project) {
        const card = document.createElement('a');
        card.className = 'related-card';
        card.href = project.dataset.url || '#';

        card.innerHTML = `
            <h3>${project.querySelector('h3').textContent}</h3>
            <p>${project.querySelector('p').textContent}</p>
            <div class="related-tags">
                ${Array.from(project.querySelectorAll('.tech-stack span'))
                    .map(tag => `<span class="related-tag">${tag.textContent}</span>`)
                    .join('')}
            </div>
        `;

        return card;
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const relatedProjects = new RelatedProjectsSystem();
    relatedProjects.init();
});