# Portfolio Modular System Documentation

## File Organization
- `base.css` - Core styles and foundational elements
  - Variables and root settings
  - Base layout styles
  - Navigation system
  - Hero section
  - Tag system
- `components.css` - Component-specific styles
  - Layout components (sections, grids)
  - Cards and content blocks
  - Stats and metrics displays
  - Media sections
  - Conclusion blocks
- `related-projects.js` - Related projects functionality
  - Tag relationship matrix
  - Project scoring system
  - Dynamic related content population

## Tag System Architecture

### UI Navigation Categories (Marketing-Focused)
These categories serve as high-level filters on the homepage:
1. Philosophy & Ethics 
2. Systems Architecture 
3. Industry Innovation 
4. User-Behavior Design 
5. Generative Production 
6. Agentic Automation 
7. AI Development 
8. Product Design

### Project Tagging System (Technical Implementation)

#### Primary Tags
- Higher weight in related projects calculation
- Project-specific descriptors
- Used in tech stack display
- Example format: `data-primary-tags="innovation strategy earned-media"`

#### Secondary Tags
- Lower weight in related projects calculation
- More detailed descriptors
- Used for fine-grained relationship matching
- Example format: `data-secondary-tags="content-strategy multi-platform media-relations analytics campaign-development distribution-system"`

### Tag Semantic Groups
Used for calculating relationship scores in the related projects system:

#### Systems & Architecture
- system-architecture 
- web-development 
- system-integration
- technical-architecture 
- automation 
- infrastructure
- methodology 
- implementation 
- development

#### Strategy & Innovation
- business-strategy 
- process-strategy 
- innovation
- risk-assessment 
- strategic-communication
- viral 
- engagement 
- earned-media

#### Design & Experience
- ux-ui 
- visual-design 
- product-design
- user-behavior 
- interaction-design
- creative-direction 
- motion-design

#### AI & Automation
- ai-development 
- ai-integration 
- ai-research
- agentic 
- generative 
- automation
- machine-learning 
- ai-systems

#### Theory & Analysis
- philosophy 
- ethics 
- critical-analysis
- research-methods 
- systems-thinking
- accessibility 
- futurism

## Related Projects Implementation

### Tag Relationship Matrix
- Stores relationship scores (1-50) between all tags
- Higher scores indicate stronger relationships
- Automatically expands with new project additions
- Located in `related-projects.js`

### Scoring System
1. Primary tags compared with double weight
2. Secondary tags compared with standard weight
3. UI filter categories add bonus points
4. Final score determines top 2 related projects

### Example Project Markup
```html
<article class="project-card" 
         data-position="1"
         data-categories="4,3"
         data-primary-tags="innovation strategy earned-media"
         data-secondary-tags="content-strategy multi-platform media-relations analytics campaign-development distribution-system">
    <!-- Project content -->
</article>
```

## Styling Guidelines

### Tag Display
- Primary tags: `.tech-stack span`
  - Font size: 0.7rem
  - Padding: 0.3rem
  - Color based on category

- Project content padding: 1rem

### Masthead UI Buttons
- Hover state: 80% transparent gold
- Enhanced shadow for button effect
- Compact padding for clean layout

## Project Page Creation Process
1. Assign UI filter categories (1-8)
2. Define primary tags (project-specific)
3. Define secondary tags (detailed descriptors)
4. Add data attributes for tag system
5. Implement relationship scores in matrix
6. Test related projects calculation

## Variables
```css
:root {
    /* Colors */
    --primary-color: #1E2E46;    /* Deep Blue */
    --secondary-color: #54b0af;  /* Cyan, Medium turquoise */
    --accent-color: #f83821;     /* Strawberry Spinach Red */
    --page-background: #EDEBDC;  /* Cream */
    --text-color: #242831;       /* Dark Navy */
    --element-background: #ffffff; /* White */
    
    /* Tag Colors */
    --tag-tech: #408A8F;         /* Teal for tech/development */
    --tag-strategy: #E85021;     /* Orange for strategy/marketing */
    --tag-ai: #7a8b69;           /* Muted green for AI/ML */
    --tag-secondary: #5f5655;    /* Brown for secondary tags */

    /* Layout */
    --nav-height: 60px;
    --section-spacing: 6rem;
    --element-spacing: 3rem;
    --content-width: 800px;
    --section-width: 1200px;
}
```

## Component Structure

### Navigation
```html
<nav class="nav">
    <div class="nav__content">
        <a href="../index.html" class="nav__back">
            <!-- Back arrow SVG -->
            Back to Portfolio
        </a>
    </div>
</nav>
```

### Hero Section
```html
<div class="hero-container">
    <div class="hero-overlay">
        <div class="content-wrap">
            <h1 class="hero-title">Page Title</h1>
        </div>
    </div>
    <div class="hero-background" style="background-image: url('path/to/image.webp');"></div>
</div>
```
- Requires parallax.js for smooth scroll effect
- Background image height set to 1200px for scrolling room
- content-wrap ensures proper title width

### Project Summary & Tags
```html
<section class="section">
    <div class="content-wrap">
        <p class="project-summary">Project description text...</p>
    </div>
    <div class="content-wrap">
        <div class="tags-section">
            <div class="tag-group">
                <span class="tag tag--tech">Primary Tag</span>
            </div>
            <div class="tag-group">
                <span class="tag tag--secondary">Secondary Tag</span>
            </div>
        </div>
    </div>
</section>
```

### Content Sections
```html
<section class="section">
    <div class="content-wrap">
        <!-- Default 800px max-width content -->
    </div>
    
    <!-- Three-item grids expand to 1200px -->
    <div class="card-grid">
        <div class="card">
            <div class="content">...</div>
        </div>
    </div>
</section>
```

### Card System
- `.card` - Base card component
  - White background
  - Border radius and shadow
  - Hover animation with translateY
- `.content` - Inner card content wrapper
  - Standard padding (1rem)
  - Text styling

### Stats Display
- `.stats-grid` - Fixed 3-column grid within content-wrap
- `.stat-item` - Fixed-width stat container
- `.stat-number` - Large number display
- `.stat-label` - Stat description

### Conclusion Block
- `.conclusion` - Final thoughts styling
  - Left border accent using var(--accent-color)
  - Uses content-wrap width
  - Enhanced typography

## Spacing Guidelines
- Section spacing: 6rem (var(--section-spacing))
- Element spacing: 3rem (var(--element-spacing))
- Card padding: 1rem
- Grid gaps: 3rem
- Tag group gaps: 0.75rem

## Width Control
- content-wrap: 800px max-width (var(--content-width))
- section: 1200px max-width (var(--section-width))
- Card grids auto-fit at minimum 300px per card
- Stats maintain fixed widths within content-wrap

## Responsive Behavior
- Mobile breakpoint: 768px
  - Single column layouts
  - Adjusted font sizes
  - Preserved content-wrap structure
  - Maintained tag system layout


# Related Projects Implementation Guide

## Data Attributes Structure
Every project card must include these data attributes:

```html
<article class="project-card"
         data-position="[1-N]"
         data-categories="[comma-separated UI filter numbers]"
         data-primary-tags="[space-separated primary tags]"
         data-secondary-tags="[space-separated secondary tags]">
```

### Position Attribute
- `data-position="1"` indicates current project
- Related projects have incrementing positions (2,3,etc)

### Categories Attribute
References UI filter numbers (1-8):
1. Philosophy & Ethics 
2. Systems Architecture 
3. Industry Innovation 
4. User-Behavior Design 
5. Generative Production 
6. Agentic Automation 
7. AI Development 
8. Product Design

Example: `data-categories="3,4"`

### Primary Tags
- Higher weight in relationship scoring (2x)
- Core project descriptors
- Reference tag semantic groups
- Example: `data-primary-tags="strategy innovation earned-media"`

### Secondary Tags
- Standard weight in relationship scoring (1x)
- Detailed descriptors
- Used for fine-grained matching
- Example: `data-secondary-tags="content-strategy multi-platform media-relations"`

## Relationship Scoring System

### Score Calculation
1. Compare primary tags (double weight)
2. Compare secondary tags (standard weight)
3. Apply UI category bonuses
4. Sort by total score
5. Select top 2 related projects

### Category Weight Multipliers
- Philosophy & Ethics: 1.3x
- Systems Architecture: 1.2x
- Industry Innovation: 1.4x
- User-Behavior Design: 1.3x
- Generative Production: 1.2x
- Agentic Automation: 1.3x
- AI Development: 1.4x
- Product Design: 1.2x

### Implementation Requirements

#### Required Files
1. related-projects.js
2. Tag semantic group definitions in CONVENTIONS.md
3. Data attributes on all project cards

#### HTML Structure
```html
<section class="section related-projects">
    <div class="content-wrap">
        <h2>Related Projects</h2>
        <div class="related-grid">
            <!-- Populated by related-projects.js -->
        </div>
    </div>
</section>
```

#### Testing New Pages
1. Verify all data attributes are present
2. Check tag semantic group alignment
3. Test relationship scoring with existing projects
4. Verify UI category assignments
5. Confirm related projects display correctly

## Maintenance Notes

### Adding New Tags
1. Add to semantic groups in CONVENTIONS.md
2. Update relationship matrix in related-projects.js
3. Document new tag relationships
4. Test with existing projects

### Modifying Relationships
1. Update scores in relationship matrix
2. Document changes in CONVENTIONS.md
3. Test impact on related projects
4. Update if needed based on results