# Portfolio Page Creation Guide

## Overview
This guide outlines the modular system for creating new portfolio project pages. The system is designed to be:
- Completely modular with pre-defined components
- Consistent across all project pages
- No need for custom CSS or new classes
- All styling is pre-defined in base.css

## Page Structure

### Required Sections (in order)
1. Navigation
2. Hero Section
3. Project Summary & Tags
4. Main Content Sections
5. Conclusion
6. Related Projects
7. Footer

### Project Summary Best Practices
The project summary section should effectively combine summary and introduction:
- Use vivid imagery and narrative to introduce concepts
- Make it flow naturally into the first content section
- Ensure it serves both as an overview and engaging introduction
- Consider combining with introduction when the content naturally flows together

Example:
```html
<section class="section">
    <div class="content-wrap">
        <p class="project-summary">
            [Engaging narrative introduction that also summarizes key points]
        </p>
    </div>
    
    <!-- First content section continues the narrative -->
    <div class="content-wrap">
        <p>[Expanding on the introduced concepts]</p>
    </div>
</section>
```

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
    <!-- Include Chart.js if needed -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
        <div class="content-wrap">
            <h2>Key Takeaways</h2>
        </div>
        <div class="content-wrap-wide">
            <div class="conclusion">
                <p>Conclusion text...</p>
            </div>
        </div>
    </section>

    <!-- Related Projects -->
    <section class="section related-projects">...</section>

    <!-- Footer -->
    <footer class="footer">...</footer>

    <!-- Required Scripts -->
    <script src="../assets/js/parallax.js" defer></script>
    <script src="../assets/js/related-projects.js"></script>
    <!-- Include charts.js if using charts -->
    <script src="../assets/js/charts.js"></script>
</body>
</html>
```

```markdown

## Content Writing Guidelines

### Audience Context
Portfolio entries should effectively communicate to three key audiences:

1. Recruiters New to Tech
- Need complex tech achievements explained without jargon
- Looking for clear indicators of high-value talent

2. Non-Technical Decision Makers
- Focus on business impact and ROI
- Need technical concepts presented in business terms

3. Industry Veterans
- Expect technical accuracy and depth
- Value innovative yet practical approaches

### Writing Strategy
- Lead with business impact and scale
- Include technical depth while explaining significance
- Use analogies for complex concepts
- Provide concrete metrics and results
- Make achievements tangible and relatable
- Emphasize timeline context
- Enable non-technical stakeholders to assess capabilities confidently

See examples in deployed portfolio entries for effective implementation of these guidelines.

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
    <!-- IMPORTANT: All headers (h2, h3) must be in their own content-wrap -->
</div>

<!-- Narrow Width (600px) -->
<div class="content-wrap-narrow">
    <!-- Use for focused content that benefits from tighter width -->
    <!-- Good for: stats displays, text-heavy content, single column lists -->
    <!-- IMPORTANT: Use for bullet point lists that follow a header -->
    <!-- Good for: portrait/vertical images -->
</div>

<!-- Wide Width (up to section max-width) -->
<div class="content-wrap-wide">
    <!-- Use for content that needs more horizontal space -->
    <!-- Good for: image grids, wide charts, multi-column layouts -->
    <!-- IMPORTANT: For three-item grids, cards should be back-to-back -->
    <!-- Use for 16:9 ratio images when they fit the page flow -->
</div>
```

#### Content Width Best Practices
1. Headers must always be in their own content-wrap:
```html
<section class="section">
    <div class="content-wrap">
        <h2>Section Title</h2>
    </div>
    <!-- Content follows in appropriate wrap -->
</section>
```

2. Bullet point lists following headers should use narrow wrap:
```html
<section class="section">
    <div class="content-wrap">
        <h2>Section Title</h2>
    </div>
    <div class="content-wrap-narrow">
        <ul>
            <li>List item one</li>
            <li>List item two</li>
        </ul>
    </div>
</section>
```

3. Three-item grids should use content-wrap-wide with back-to-back cards:
```html
<div class="content-wrap-wide">
    <div class="card-grid">
        <div class="card">First item</div>
        <div class="card">Second item</div>
        <div class="card">Third item</div>
    </div>
</div>
```

4. Image width guidelines:
- Use content-wrap-wide for 16:9 ratio images when they fit the page flow
- Use content-wrap-narrow for portrait/vertical images
- Use content-wrap for standard images that don't need emphasis

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

### Layout Best Practices

1. **Three-Item Grid Layout**
   - When displaying three items in a row, use `content-wrap-wide`
   - Place cards back-to-back to utilize full page width
   - Example:
   ```html
   <section class="section">
       <div class="content-wrap">
           <h2>Section Title</h2>
       </div>
       <div class="content-wrap-wide">
           <div class="card-grid">
               <div class="card"><!-- First item --></div>
               <div class="card"><!-- Second item --></div>
               <div class="card"><!-- Third item --></div>
           </div>
       </div>
   </section>
   ```

2. **Headers and Section Titles**
   - Always place headers in their own `content-wrap`
   - This ensures proper spacing and alignment
   - Example:
   ```html
   <section class="section">
       <div class="content-wrap">
           <h2>Section Title</h2>
       </div>
       <!-- Content follows in separate content-wrap -->
   </section>
   ```

3. **Bullet Point Lists**
   - Place introductory text in normal `content-wrap`
   - Use `content-wrap-narrow` for the bullet point list itself
   - Example:
   ```html
   <section class="section">
       <div class="content-wrap">
           <p>Introduction or context for the list...</p>
       </div>
       <div class="content-wrap-narrow">
           <ul>
               <li>First point</li>
               <li>Second point</li>
           </ul>
       </div>
   </section>
   ```

4. **Wide Images**
   - Only use `content-wrap-wide` for 16:9 ratio images when appropriate for page flow
   - Not all 16:9 images need to be wide - consider the content context
   - Example from portfolio-system-design.html shows strategic use of wide images

5. **Narrow Images**
   - Consider using `content-wrap-narrow` for focused visual content
   - Particularly effective for portrait orientation or detail shots
   - Example from ai-mvp-development.html demonstrates effective narrow image use

6. **Conclusions Section**
   - Place conclusion header in normal `content-wrap`
   - Use `content-wrap-wide` for the conclusions content
   - Example:
   ```html
   <section class="section">
       <div class="content-wrap">
           <h2>Key Takeaways</h2>
       </div>
       <div class="content-wrap-wide">
           <div class="conclusion">
               <p>Conclusion content...</p>
           </div>
       </div>
   </section>
   ```

7. **Chart Integration**
   ```html
   <!-- In head section -->
   <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

   <!-- Before end of body -->
   <script src="../assets/js/charts.js"></script>
   ```

8. **Summary and Introduction**
   - When both are short, consider combining them for better flow
   - Example from ethics-logic-thought-experiment.html shows effective combination

### Individual Component Patterns

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

### 6. Conclusion Section
```html
<section class="section">
    <!-- Conclusion header must be in its own content-wrap -->
    <div class="content-wrap">
        <h2>Key Takeaways</h2>
    </div>
    <!-- Main conclusion text in regular content-wrap -->
    <div class="content-wrap">
        <p>Main conclusion text and key points...</p>
    </div>
    <!-- Only the final, standalone sentence goes in .conclusion wrap -->
    <div class="content-wrap-wide">
        <div class="conclusion">
            <p>Final concluding sentence that can stand alone while still connecting to the text above.</p>
        </div>
    </div>
</section>
```

**Important Note About Conclusions:**
- The `.conclusions` class should contain only one closing sentence
- Place the rest of the conclusion content above the `.conclusions` wrap
- The sentence in `.conclusions` must be able to stand alone while also working as part of the larger conclusion
- Example structure:
  ```html
  <section class="section">
      <div class="content-wrap">
          <h2>Key Takeaways</h2>
          <p>[Main conclusion content goes here...]</p>
      </div>
      <div class="content-wrap-wide">
          <div class="conclusion">
              <p>[Single, standalone closing sentence that also works with content above]</p>
          </div>
      </div>
  </section>
  ```

## Interactive Elements

### 1. Data Display Components

#### Data Tables
For structured data presentation with consistent styling and responsive layouts:

```html
<div class="content-wrap-narrow">
    <div class="card">
        <table class="w-full">
            <thead>
                <tr>
                    <th class="p-4 text-left">Header</th>
                    <th class="p-4 text-center">Header</th>
                </tr>
            </thead>
            <tbody>
                <tr class="h-12">
                    <td class="p-4">Content</td>
                    <td class="p-4 text-center">Content</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
```

Best Practices:
- Use `content-wrap-narrow` for better readability
- Wrap tables in a card component
- Use consistent padding and height
- Ensure responsive behavior with overflow handling

#### Statistical Charts
For trend visualization and data relationships, we use Chart.js:

Setup requirements:
```html
<!-- In head section -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Before end of body -->
<script src="../assets/js/charts.js"></script>
```

Chart Design Guidelines:
- Use tag system colors for consistency:
  ```javascript
  const tagColors = {
    tech: '#408A8F',     // Teal
    strategy: '#E85021', // Orange
    ai: '#7a8b69'        // Green
  };
  ```
- Set fixed height for consistent sizing
- Include proper tooltips and labels
- Consider mobile responsiveness

When to Use Each:
- Tables for:
  - Precise numerical comparisons
  - Structured data presentation
  - Feature comparisons
  - When exact values are important

- Charts for:
  - Trend visualization
  - Complex relationships
  - Comparative analysis over time
  - Data patterns and distributions

### 2. Code Snippets
For displaying formatted code examples, we use Prism.js:

Setup requirements:
```html
<!-- In head section -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" />

<!-- Before end of body -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
```

Usage:
```html
<div class="content-wrap">
    <div class="code-card">
        <pre class="language-javascript">
            <code>
                // Your code here
                function example() {
                    return "Hello World";
                }
            </code>
        </pre>
    </div>
</div>
```

See implementation examples:
- code-analysis-mcp-build.html
- coding-visual-preview-tool.html

### 3. Mermaid Diagrams
For creating dynamic flowcharts and diagrams, we use Mermaid.js:

Setup requirements:
```html
<!-- In head section -->
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
    mermaid.initialize({ startOnLoad: true });
</script>
```

Usage:
```html
<div class="content-wrap">
    <div class="card">
        <div class="mermaid">
            graph TD
                A[Start] --> B[Process]
                B --> C[End]
        </div>
    </div>
</div>
```

Best Practices:
- Wrap Mermaid diagrams in .content-wrap or .content-wrap-narrow based on complexity
- Use the card component for consistent styling
- Add explanatory text after complex diagrams
- For large diagrams, consider using .content-wrap-narrow to improve readability

Example with Context:
```html
<section class="section">
    <div class="content-wrap">
        <h2>Technical Architecture</h2>
    </div>
    
    <div class="content-wrap-narrow">
        <div class="mermaid">
            graph TD
                A[Client] --> B[Server]
                B --> C[Process]
        </div>
    </div>

    <div class="content-wrap">
        <p>Explanatory text about the diagram...</p>
    </div>
</section>
```

See implementation examples:
- code-analysis-mcp-build.html (complex flowchart)
- coding-visual-preview-tool.html (with explanatory text)

### 4. Slideshow Components

#### Side-by-Side Two-Page Slideshow
Best for presenting content that benefits from comparison or sequential viewing:
```html
<section class="section">
    <div class="content-wrap">
        <h2>Section Title</h2>
    </div>
    <div class="content-wrap">
        <div class="slideshow-container book-style">
            <div class="slides">
                <img src="path/to/image1.webp" alt="Slide 1">
                <img src="path/to/image2.webp" alt="Slide 2">
                <!-- Additional slides -->
            </div>
            <button class="prev">❮</button>
            <button class="next">❯</button>
            <div class="slide-counter">1 / [total]</div>
        </div>
    </div>
</section>
```
Example usage in product-marketing-branding.html

#### Presentation Style with Thumbnails
Ideal for larger collections where navigation preview is helpful:
```html
<section class="section">
    <div class="content-wrap">
        <h2>Section Title</h2>
    </div>
    <div class="content-wrap-wide">
        <div class="slideshow-container presentation-style">
            <div class="slides">
                <img src="path/to/image1.webp" alt="Slide 1">
                <img src="path/to/image2.webp" alt="Slide 2">
                <!-- Additional slides -->
            </div>
            <button class="prev">❮</button>
            <button class="next">❯</button>
            <div class="slide-counter">1 / [total]</div>
            <div class="slide-thumbnails">
                <!-- Thumbnails populated by JavaScript -->
            </div>
        </div>
    </div>
</section>
```
Example usage in influencer-growth-strategy.html

#### Large Slideshows (30+ Images)
For very large slideshows (like fashion lookbooks):
- Break implementation into manageable chunks
- Create slideshow structure first with a few images
- Add remaining images in subsequent updates
- Example in ai-fashion-strategy.html shows successful handling of 30+ images

Required Scripts for Slideshows:
```html
<!-- For presentation style with thumbnails -->
<script src="../assets/js/presentation-slideshow.js"></script>

<!-- For basic slideshows -->
<script src="../assets/js/slideshow.js"></script>
```