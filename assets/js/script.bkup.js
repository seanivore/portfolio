// Tag System Management
class TagSystem {
    constructor() {
        this.activeTag = null;
        this.tagButtons = document.querySelectorAll('.tag-ui');
        this.projectCards = document.querySelectorAll('.project-card');
        
        this.setupEventListeners();
        this.randomizeInitialOrder(); // Just shuffle once on load
        this.updateCardCount(); // Add initial count
    }

    setupEventListeners() {
        this.tagButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.handleTagClick(button);
            });
        });
    }

    randomizeInitialOrder() {
        const grid = document.querySelector('.project-grid');
        const cards = Array.from(this.projectCards);
        
        // Fisher-Yates shuffle
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        
        cards.forEach(card => {
            grid.appendChild(card);
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
        this.updateCardCount();
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
    
        let matchCount = 0;
        this.projectCards.forEach(card => {
            const primaryCategories = card.dataset.categories?.split(',').map(n => parseInt(n.trim())) || [];
            
            if (primaryCategories.includes(categoryNumber)) {
                this.showCard(card);
                matchCount++;
            } else {
                this.hideCard(card);
            }
        });
        
        // Update the count using matchCount instead
        const count = matchCount.toString().padStart(2, '0');
        const countEl = document.querySelector('#card-count');
        if (countEl) {
            countEl.textContent = count;
        }
    }
    
    showAllProjects() {
        this.projectCards.forEach(card => {
            this.showCard(card);
        });
        // When showing all, update with total count
        const count = this.projectCards.length.toString().padStart(2, '0');
        const countEl = document.querySelector('#card-count');
        if (countEl) {
            countEl.textContent = count;
        }
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
        }, 30);
    }

    // Card count utility
    updateCardCount() {
        console.log('Starting updateCardCount...');
        console.log('All project cards:', this.projectCards.length);
        
        const visibleCards = Array.from(this.projectCards)
            .filter(card => {
                const isHidden = card.style.display === 'none';
                console.log('Card:', card.querySelector('.project-title')?.textContent);
                console.log('Is hidden:', isHidden);
                return !isHidden;
            });
            
        console.log('Visible cards count:', visibleCards.length);
        const count = visibleCards.length.toString().padStart(2, '0');
        const countEl = document.querySelector('#card-count');
        if (countEl) {
            countEl.textContent = count;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const tagSystem = new TagSystem();
});