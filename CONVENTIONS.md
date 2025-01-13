# Portfolio Page Creation Guide

## Overview
This guide outlines the modular system for creating new portfolio project pages. The system is designed to be:
- Completely modular with pre-defined components
- Consistent across all project pages
- No need for custom CSS or new classes
- All styling is pre-defined in base.css

## Quick Start
1. Copy `template.html` as your starting point
2. Reference example pages:
   - `pages/content-strategy-framework.html`
   - `pages/realtime-social-system.html`
3. Follow your project's TXT asset guide for:
   - Image URLs (pre-formatted for GitHub)
   - Content sections
   - Element widths
   - Tags and categories

## Page Structure

### Required Sections (in order)
1. Navigation
2. Hero Section
3. Project Summary & Tags
4. Main Content Sections
5. Conclusion
6. Related Projects
7. Footer

### Basic HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Title | Category</title>
    <meta name="description" content="Project description">
    <meta property="og:image" content="thumbnail-url">
    <link rel="stylesheet" href="../base.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">...</nav>

    <!-- Hero Section -->
    <div class="hero">...</div>

    <!-- Project Summary & Tags -->
    <section class="section">...</section>

    <!-- Content Sections -->
    <section class="section">...</section>

    <!-- Conclusion -->
    <section class="section">
        <div class="conclusion">...</div>
    </section>

    <!-- Related Projects -->
    <section class="section related-projects">...</section>

    <!-- Footer -->
    <footer class="footer">...</footer>

    <!-- Required Scripts -->
    <script src="../assets/js/parallax.js" defer></script>
    <script src="../assets/js/related-projects.js"></script>
</body>
</html>
```

## Visual Spacing System

### Section Usage
- Use `<section class="section">` to create visual breaks between major content blocks
- Each section creates significant vertical spacing (6rem) from other sections
- Every major content block should be wrapped in its own section
- Multiple related elements can be grouped in one section when they form a cohesive unit

### Content Width System
All content within sections must use one of these three predefined width classes:

```html
<!-- Standard Width (800px) -->
<div class="content-wrap">
    <!-- Use for standard content blocks -->
    <!-- Good for: regular text, single images, basic cards -->
</div>

<!-- Narrow Width (600px) -->
<div class="content-wrap-narrow">
    <!-- Use for focused content that benefits from tighter width -->
    <!-- Good for: stats displays, text-heavy content, single column lists -->
</div>

<!-- Wide Width (up to section max-width) -->
<div class="content-wrap-wide">
    <!-- Use for content that needs more horizontal space -->
    <!-- Good for: image grids, wide charts, multi-column layouts -->
</div>
```

Example of proper section and content-wrap nesting:
```html
<!-- Major content block -->
<section class="section">
    <!-- Section title -->
    <div class="content-wrap">
        <h2>Section Title</h2>
    </div>
    
    <!-- Wide content like image grid -->
    <div class="content-wrap-wide">
        <div class="card-grid">
            <!-- Cards here -->
        </div>
    </div>
    
    <!-- Focused content like stats -->
    <div class="content-wrap-narrow">
        <div class="stats-grid">
            <!-- Stats here -->
        </div>
    </div>
</section>
```

## Common Layout Patterns

### 1. Single Image with Caption
```html
<div class="content-wrap-narrow">
    <div class="card">
        <img src="github-url" alt="descriptive text">
        <div class="caption">
            <p>Image caption text</p>
        </div>
    </div>
</div>
```

### 2. Two Images Side-by-Side
```html
<div class="content-wrap-wide">
    <div class="card-grid">
        <div class="card">
            <img src="github-url" alt="descriptive text">
            <div class="caption">
                <p>First image caption</p>
            </div>
        </div>
        <div class="card">
            <img src="github-url" alt="descriptive text">
            <div class="caption">
                <p>Second image caption</p>
            </div>
        </div>
    </div>
</div>
```

### 3. Three Images in a Row
```html
<div class="content-wrap-wide">
    <div class="card-grid">
        <div class="card">
            <img src="github-url" alt="descriptive text">
            <div class="caption">
                <p>Caption text</p>
            </div>
        </div>
        <div class="card">
            <img src="github-url" alt="descriptive text">
            <div class="caption">
                <p>Caption text</p>
            </div>
        </div>
        <div class="card">
            <img src="github-url" alt="descriptive text">
            <div class="caption">
                <p>Caption text</p>
            </div>
        </div>
    </div>
</div>
```

### 4. Text Content on Card
```html
<div class="content-wrap">
    <div class="card">
        <div class="content">
            <h3>Section Title</h3>
            <p>Paragraph text...</p>
            <ul>
                <li>List item one</li>
                <li>List item two</li>
            </ul>
        </div>
    </div>
</div>
```

### 5. Stats Display (Always use three stats)
```html
<div class="content-wrap-narrow">
    <div class="stats-grid">
        <div class="stat-item">
            <div class="stat-number">85%</div>
            <div class="stat-label">Metric Label</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">3x</div>
            <div class="stat-label">Metric Label</div>
        </div>
        <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Metric Label</div>
        </div>
    </div>
</div>
```

## Interactive Elements

### 1. Image Slideshow
For displaying multiple images in a navigable slideshow format. Two styles available:

#### Book-Style Side-by-Side Display
```html
<div class="content-wrap">
    <div class="slideshow-container book-style">
        <div class="slides">
            <img src="image1-url" alt="Description 1">
            <img src="image2-url" alt="Description 2">
            <!-- Add all slides -->
        </div>
        <button class="prev" onclick="moveSlide(-1)">❮</button>
        <button class="next" onclick="moveSlide(1)">❯</button>
        <div class="slide-counter">1 / 10</div>
    </div>
</div>
```

#### Single Image Display
```html
<div class="content-wrap-narrow">
    <div class="slideshow-container">
        <div class="slides">
            <img src="image1-url" alt="Description 1">
            <img src="image2-url" alt="Description 2">
            <!-- Add all slides -->
        </div>
        <button class="prev" onclick="moveSlide(-1)">❮</button>
        <button class="next" onclick="moveSlide(1)">❯</button>
        <div class="slide-counter">1 / 10</div>
    </div>
</div>
```

Required Script:
```html
<script src="../assets/js/slideshow.js"></script>
```

### 2. React Charts
For displaying interactive data visualizations. Two implementation methods are available:

#### Method 1: Using chart-loader.js
Best for simpler charts with inline data:

```html
<!-- In head section -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- In body where chart should appear -->
<div class="content-wrap">
    <div id="chart-container" class="h-96"></div>
</div>

<!-- Before closing body tag -->
<script src="../assets/js/chart-loader.js"></script>
```

#### Method 2: Using mobile-charts.js with TSX files
Better for complex charts or when data is maintained separately:

```html
<!-- In head section -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- In body where chart should appear -->
<div class="content-wrap-wide">
    <div id="performance-chart" data-chart="https://raw.githubusercontent.com/user/repo/branch/path/to/chart.tsx"></div>
</div>

<!-- Before closing body tag -->
<script src="../assets/js/mobile-charts.js"></script>
```

Example Chart Data Structure (chart.tsx):
```typescript
// chart-1-example.tsx
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'User Engagement',
    data: [65, 70, 75, 80, 85],
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

// Export for mobile-charts.js
export default data;
```

Note: When using Method 2, ensure your TSX files are properly formatted and accessible via GitHub raw URLs.

### 3. GIF Handling
Two approaches for including GIFs:

#### Direct URL (Preferred for most cases)
```html
<div class="content-wrap">
    <img src="https://raw.githubusercontent.com/user/repo/branch/path/to/file.gif" 
         alt="Description">
</div>
```

#### Raw GitHub URL (For larger GIFs)
```html
<div class="content-wrap">
    <img src="https://github.com/user/repo/blob/branch/path/to/file.gif?raw=true" 
         alt="Description">
</div>
```

Note: Use raw=true approach for GIFs larger than 5MB or when direct URL doesn't work.

## Tag System

### Primary Tags (Top Row)
```html
<div class="tag-group">
    <span class="tag tag--tech">Technology Tag</span>
    <span class="tag tag--strategy">Strategy Tag</span>
    <span class="tag tag--ai">AI Tag</span>
</div>
```

### Secondary Tags (Bottom Row)
```html
<div class="tag-group">
    <span class="tag tag--secondary">Secondary Tag</span>
    <span class="tag tag--secondary">Secondary Tag</span>
</div>
```

## Project Card Data Attributes
Required for related projects functionality:
```html
<article class="project-card" 
         data-position="1"
         data-categories="3,4"
         data-primary-tags="strategy innovation earned-media"
         data-secondary-tags="content-strategy multi-platform media-relations">
</article>
```

### Category Numbers Reference
1. Philosophy & Ethics 
2. Systems Architecture 
3. Industry Innovation 
4. User-Behavior Design 
5. Generative Production 
6. Agentic Automation 
7. AI Development 
8. Product Design

## CSS Variables
Use these predefined variables for consistency:

### Colors
```css
--primary-color: #1E2E46;    /* Deep Blue */
--secondary-color: #54b0af;  /* Cyan */
--accent-color: #f83821;     /* Red */
--page-background: #EDEBDC;  /* Cream */
--text-color: #242831;       /* Dark Navy */
--element-background: #ffffff; /* White */

/* Tag Colors */
--tag-tech: #408A8F;         /* Teal */
--tag-strategy: #E85021;     /* Orange */
--tag-ai: #7a8b69;           /* Green */
--tag-secondary: #5f5655;    /* Brown */
```

### Layout
```css
--nav-height: 60px;
--section-spacing: 6rem;
--element-spacing: 3rem;
--content-width: 800px;
--section-width: 1200px;
```

## Page Creation Checklist

### Setup
□ Copy template.html to new file
□ Update page title and meta description
□ Update og:image meta tag with thumbnail URL

### Hero Section
□ Set hero background image
□ Add hero title
□ Verify parallax effect works

### Project Info
□ Add project summary
□ Set appropriate primary tags
□ Add relevant secondary tags
□ Include data attributes for related projects

### Content
□ Follow TXT asset guide structure
□ Use appropriate content-wrap widths
□ Include all images with captions
□ Add stats if available
□ Write conclusion section

### Final Checks
□ Verify all image URLs are GitHub formatted
□ Check all scripts are included
□ Test parallax scrolling
□ Verify related projects loading
□ Test responsive layout

## Common Issues & Solutions

### Images Not Loading
- Verify GitHub URL format is correct
- Check image path in assets folder
- Ensure image is committed to repository

### Related Projects Not Showing
- Verify data attributes are set
- Check category numbers are correct
- Ensure related-projects.js is included

### Layout Issues
- Use correct content-wrap class for width
- Keep stats display to exactly three items
- Maintain card-grid structure for multiple items

### Parallax Not Working
- Verify parallax.js is included
- Check hero section structure
- Ensure hero-background height is set

Need more help? Reference the example pages or ask for clarification.

## Narrative Structure Patterns

The example pages demonstrate effective narrative structures you can follow:

### Timeline-Based Structure (from content-strategy-framework.html)
```
1. Innovation Timeline
   - Historical context
   - Key milestones
   - Evolution of approach
2. Campaign Results
   - Metrics and achievements
   - Recognition
3. Key Takeaways
   - Industry impact
   - Future implications
```

### Context-Based Structure (from realtime-social-system.html)
```
1. Overview/Introduction
   - Problem statement
   - Innovation summary
2. Case Studies
   - Specific examples
   - Results and impact
3. Context Section
   - Industry landscape
   - Strategic approach
4. Key Takeaways
   - Broader implications
   - Legacy impact
```

## TXT Asset Guide Format

Each project folder contains a numbered TXT file (e.g., "22-agentic-social-manager.txt") that provides:

```
# Project Title
[Title as it should appear in hero section]

# Project Summary
[2-3 sentence summary for project-summary section]

# Project Hero Image
1200px x 1200px square image to be placed as the hero image. 
https://github-url-1.webp

# Project Tile Title
Shortened Title Version for Ease of Reading on Homepage Content Tile

# Project Tile Summary 
Brief 1-sentence summary, for ease of reading on Content Tile on Homepage. Length example: "ArtMovementMuseum uses cutting edge technology to raise up time-tested traditional art aesthetics through modern design."

# Project Tile Image 
16:9 aspect image with 600px width used in the design of the homepage content tile. 
https://github-url-1.webp

# SEO META Title 
Proper SEO formatted version of the title for the hidden meta data section. 

# SEO META Summary 
Proper SEO formatted version of the summary for the hidden meta data section. 

# SEO META Social Share Image Thumbnail 
1200px x 630px image placed in the hidden meta data section. 
https://github-url-1.webp

# Tags
Primary (always 3, in three categories, if possible):
- tag1 (tech related)
- tag2 (strategy related)
- tag3 (ai related) 

Secondary (always 6):
- tag1
- tag2
- tag3
- tag4
- tag5
- tag6

# Categories
[Comma-separated list of category numbers]

# Content Sections
[Section by section content with specified widths]

## Section 1: [Title]
Width: [content-wrap/content-wrap-narrow/content-wrap-wide]
Content: [Text content]
Images: [GitHub URLs]

## Interactive Elements

### Slideshow
[side-by-side book like slide show of square images; max 800px width]
https://github-url-1.webp
https://github-url-2.webp
https://github-url-3.webp
[continue listing all slideshow images]

### React Chart
[React Chart of Metrics Over Time]
https://path/to/chart.tsx

### GIFs
[one gif max width 800px wide]
<img src="https://github.com/user/repo/blob/branch/path/to/file.gif?raw=true" alt="Description">

[two square gifs side-by-side in row; total row width 800px max width]
<img src="https://github.com/user/repo/blob/branch/path/to/file1.gif?raw=true" alt="Description 1">
<img src="https://github.com/user/repo/blob/branch/path/to/file2.gif?raw=true" alt="Description 2">

## Additional Sections
[Continue with other content sections...]

# Stats (if applicable)
1. Number: [value]
   Label: [text]
2. Number: [value]
   Label: [text]
3. Number: [value]
   Label: [text]

# Conclusion
[Conclusion text following standard formula]
```

## Image Storytelling Patterns

### Before/After Comparison
As seen in content-strategy-framework.html:
```html
<div class="content-wrap">
    <div class="card-grid">
        <div class="card">
            <img src="before-image-url" alt="Before">
            <div class="caption">
                <p>Situation before implementation</p>
            </div>
        </div>
        <div class="card">
            <img src="after-image-url" alt="After">
            <div class="caption">
                <p>Results after implementation</p>
            </div>
        </div>
    </div>
</div>
```

### Case Study Presentation
As seen in realtime-social-system.html:
```html
<div class="content-wrap-wide">
    <div class="card-grid">
        <div class="card">
            <img src="case-study-1-url" alt="Case Study 1">
            <div class="caption">
                <p>Case study caption</p>
            </div>
            <div class="content">
                <h3>Case Study Title</h3>
                <p>Context paragraph</p>
                <ul>
                    <li>Key achievement 1</li>
                    <li>Key achievement 2</li>
                </ul>
            </div>
        </div>
        <!-- Repeat for second case study -->
    </div>
</div>
```

## Related Projects System

The related projects system uses a sophisticated scoring algorithm:

### Tag Relationship Scoring
- Primary tags have 2x weight
- Secondary tags have 1x weight
- Category matches add bonus points
- Final score determines top 2 related projects

### Category Weight Multipliers
1. Philosophy & Ethics: 1.3x
2. Systems Architecture: 1.2x
3. Industry Innovation: 1.4x
4. User-Behavior Design: 1.3x
5. Generative Production: 1.2x
6. Agentic Automation: 1.3x
7. AI Development: 1.4x
8. Product Design: 1.2x

### Tag Selection Strategy
Choose tags that:
- Accurately describe core project aspects (primary)
- Capture additional relevant areas (secondary)
- Connect to related work through shared concepts
- Span both technical and strategic aspects

## Writing Formulas

### Project Summary
1. Start with innovation/achievement
2. Explain approach/methodology
3. Highlight key impact/results

Example:
```
Development of a comprehensive content strategy framework spanning multiple platforms and media types. Building on earlier innovations in real-time content creation, this project evolved our social media strategy to encompass coordinated hashtag campaigns and pioneering video content approaches.
```

### Conclusion Formula
1. Summarize key achievements
2. Connect to broader industry impact
3. Highlight lasting influence
4. Project future implications

Example:
```
This pioneering work in real-time social media marketing established new benchmarks during a pivotal period of digital transformation. By developing innovative workflows for rapid visual content creation when most brands relied on text-only updates, we demonstrated the powerful potential of timely, visual storytelling. Our strategic approach to live event coverage and trend monitoring, combined with efficient content production systems, created a replicable model that influenced industry practices.
```
