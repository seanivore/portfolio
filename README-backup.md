# Portfolio Modular System Documentation

## File Organization
- `modular-template-base.css` - Core styles and foundational elements
  - Variables and root settings
  - Base layout styles
  - Navigation system
  - Hero section
  - Tag system
- `modular-template-components.css` - Component-specific styles
  - Layout components (sections, grids)
  - Cards and content blocks
  - Stats and metrics displays
  - Media sections
  - Conclusion blocks

## Core Principles
- CSS split by concern (base vs components)
- Every element uses content-wrap for width control
- BEM-style class naming for clarity
- Three-item grids expand beyond content-wrap
- Consistent variable usage for spacing and widths

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
  - Standard padding (1.75rem)
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
- Card padding: 1.75rem
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