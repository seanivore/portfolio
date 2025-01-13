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

### 1. Data Visualization
For displaying charts and data visualizations, we use Chart.js with React components. Our system supports two types of visualizations:

#### Charts
Use Chart.js for trend visualization and complex relationships. Charts are implemented as React components using our artifact system.

Setup requirements:
```html
<!-- In head section -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- In body where chart should appear -->
<section class="section">
    <div id="chart-container"></div>
</section>
```

Example React Component:
```jsx
import React, { useEffect, useRef } from 'react';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    // Initialize chart using window.Chart
    if (typeof window.Chart !== 'undefined') {
      new window.Chart(ctx, {
        type: 'bar',  // or 'line', 'pie', etc.
        data: {
          // Chart data configuration
        },
        options: {
          // Chart options configuration
        }
      });
    }
  }, []);

  return (
    <div className="content-wrap mb-12">
      <div className="h-96">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default ChartComponent;
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
- Maintain responsive design using Tailwind's core utility classes
- Set fixed height using h-96 class for consistent sizing
- Use clear, readable fonts and adequate spacing
- Include proper tooltips and labels for accessibility

#### Tables
Use HTML tables for clear, comparative data presentation:

```html
<div class="content-wrap">
    <div class="overflow-x-auto">
        <table class="w-full border-collapse">
            <thead>
                <tr>
                    <th class="p-2 border text-left">Header 1</th>
                    <th class="p-2 border text-left">Header 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border">Data 1</td>
                    <td class="p-2 border">Data 2</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
```

Table Design Guidelines:
- Use consistent padding (p-2)
- Include borders for clarity
- Ensure responsive behavior with overflow-x-auto
- Left-align text for readability
- Use appropriate content-wrap class based on table width

#### When to Use Each:
- Use Charts for:
  - Trend visualization
  - Complex relationships
  - Comparative analysis over time
  - Data patterns and distributions

- Use Tables for:
  - Precise numerical comparisons
  - Structured data presentation
  - Feature comparisons
  - When exact values are important

[The rest of the original CONVENTIONS.md content would continue here...]