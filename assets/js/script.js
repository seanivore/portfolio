// Tag System Management
class TagSystem {
    constructor() {
        this.activeTag = null;
        this.tagButtons = document.querySelectorAll('.tag-ui');
        this.projectCards = document.querySelectorAll('.project-card');
        
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

    filterProjects() {
        this.projectCards.forEach(card => {
            const primaryTags = (card.dataset.primaryTags?.split(' ') || [])
                .map(tag => tag.toLowerCase());

            // Break button text into keywords
            const searchTerms = this.activeTag
                .toLowerCase()
                .replace(/[/-]/g, ' ')
                .split(' ')
                .filter(word => word.length > 2);

            // Show card if ANY of our search terms appear in primary tags
            const hasTag = searchTerms.some(term => 
                primaryTags.some(tag => tag.includes(term))
            );

            if (hasTag) {
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