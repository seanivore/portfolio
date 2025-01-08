# Step 1: Setting Up The Basic HTML File

We'll create our new page by copying content-strategy-framework.html - this is our go-to example because it's already working perfectly. The most important thing to remember is that all the classes and styling are already done. You won't need to create any new CSS classes or styling - just use what's already there.

Let's go through this in order:

1. Document Head Setup

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Update these three meta tags from the asset text file -->
    <title>Social Media Innovation | Real-Time Content System</title>
    <meta name="description" content="Development of a real-time social media content production system achieving significant earned media coverage.">
    <meta property="og:image" content="https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/realtime-social-system/img-thumbnail-realtime-social-system.webp">
    <!-- Keep these CSS links exactly as they are -->
    <link rel="stylesheet" href="../base.css">
    <link rel="stylesheet" href="../components.css">
</head>

2. Navigation Section — The navigation stays identical across all pages. 

<body>
    <nav class="nav">
        <div class="nav-content">
            <a href="../index.html" class="nav__back">
                <!-- Keep this SVG arrow exactly as is -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15l-3-3 3-3M21 12H3"/>
                </svg>
                Back to Portfolio
            </a>
        </div>
    </nav>

3. Hero Section 

<div class="hero">
    <div class="hero-overlay">
        <div class="content-wrap">
            <h1 class="hero-title">Real-Time Social Media Production System</h1>
        </div>
    </div>
    <div class="hero-background" style="background-image: url('https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/realtime-social-system/img-hero-realtime-social-system.webp');"></div>
</div>

## KEY THING TO REMEMBER: 
You're not creating any new styles or classes - everything is already styled in base.css and components.css. Just use the existing classes exactly as they appear in content-strategy-framework.html.

# Step 2: Project Summary Section - Setting Up Data and Display Elements

This section serves two crucial purposes: it contains a hidden data structure that powers our site's "Related Projects" functionality, and it presents the project summary to users.

1. Section Structure

<section class="section">

This wrapper ensures consistent vertical spacing between major page sections.

2. Hidden Project Card - Essential for Related Projects System

<div class="content-wrap">
    <article class="project-card" 
             data-position="2"
             data-categories="4,3"
             data-primary-tags="innovation viral live-coverage"
             data-secondary-tags="social-media content-production real-time-strategy media-relations analytics innovation-systems"
             style="display: none;">
    </article>
</div>

## IMPORTANT DETAILS ABOUT THIS CARD:

• While invisible to users (style="display: none"), this card is critical infrastructure. It contains all the data our "Related Projects" system needs to find and display relevant portfolio items at the bottom of each project page.

• The data attributes have specific sources:

    • data-position="2": Comes from the PLACEMENT field in your asset text file
    • data-categories="4,3": Must match exactly what's in the homepage tile for this project
    • data-primary-tags: Takes the PRIMARY TAGS from your asset text file
    • data-secondary-tags: Takes the SECONDARY TAGS from your asset text file

• All tags should be lowercase and hyphenated (e.g., "real-time-strategy" not "Real Time Strategy")

• The order of the tags should match your asset text file exactly 

2. Project Summary Display

<div class="content-wrap">
    <p class="project-summary">Strategy of event live coverage inserting messaging of real-time occurrences to leverage viral earned media responses.</p>
</div>

• This displays the actual summary text to users
• Use the exact text from CONTENT TILE SUMMARY in your asset file
• The content-wrap class ensures proper width and margins
• We use a separate content-wrap div (rather than nesting) to maintain consistent spacing

# Step 3: Tags Display and First Content Section

Let's handle two key parts here: the visual tag display and the start of our main content. The tags section is particularly important as it needs to match the data we just set up in our hidden project card.

1. Visual Tag Display

<div class="content-wrap-narrow">
    <div class="tags-section">

• We use content-wrap-narrow here (600px wide) 
• tags-section adds proper spacing and flexbox layout

2. Primary Tags Group

<div class="tag-group">
    <span class="tag tag--strategy">Innovation</span>
    <span class="tag tag--tech">Viral</span>
    <span class="tag tag--strategy">Live Coverage</span>
</div>

    Primary tags get color-coded using modifier classes:

    • tag--strategy: Orange for strategy/marketing
    • tag--tech: Teal for technical items
    • tag--ai: Muted green for AI/ML

Choose the modifier class that best matches the tag's category

Maintain the exact same tags as in your data-primary-tags

3. Secondary Tags Group

<div class="tag-group">
    <span class="tag tag--secondary">Social Media</span>
    <span class="tag tag--secondary">Content Production</span>
    <span class="tag tag--secondary">Real-Time Strategy</span>
    <span class="tag tag--secondary">Media Relations</span>
    <span class="tag tag--secondary">Analytics</span>
    <span class="tag tag--secondary">Innovation Systems</span>
</div>

    • All secondary tags use tag--secondary (brown) styling
    • Must match exactly what's in your data-secondary-tags
    • Keep them in the same order as your asset file

4. Start Main Content Section

</div></div></section>  <!-- Close tags section -->

<section class="section">
    <div class="content-wrap">
        <h2>[First H2]</h2>

    • New section for main content
    • Back to standard content-wrap (800px) for text content
    • Keep headings consistently styled with what's in content-strategy-framework.html

Ah yes, you're right! Let me properly explain the content wrap system before moving forward:

## Understanding Content Wraps - Your Building Blocks

IMPORTANT: Every element inside a section needs a content wrap. This is how we control widths and maintain consistent spacing. Think of content wraps as containers that organize your content.

We have three types of content wraps:

1. **Standard: `content-wrap`**
   * Default choice - use this unless you have a specific reason not to
   * Width: 800px
   * Perfect for text content, standard layouts
   * Example: `<div class="content-wrap">`

2. **Narrow: `content-wrap-narrow`**
   * Width: 600px
   * Use for:
     - Tag sections (keeps them nicely centered)
     - Stat tiles
     - Single column cards
   * Example: `<div class="content-wrap-narrow">`

3. **Wide: `content-wrap-wide`**
   * Full width with padding
   * Use for:
     - Three-image card rows
     - Charts
     - Large media displays
   * Example: `<div class="content-wrap-wide">`

Using these properly is key to maintaining consistent spacing and width across all pages. Never leave content directly in a section without a content wrap!

2. Primary Tags Group

<div class="tag-group">
    <span class="tag tag--strategy">Innovation</span>
    <span class="tag tag--tech">Viral</span>
    <span class="tag tag--strategy">Live Coverage</span>
</div>

• All secondary tags use tag--secondary (brown) styling
• Must match exactly what's in your data-secondary-tags
• Keep them in the same order as your asset file

## Understanding Our CSS Variables & Colors

All styling variables are pre-defined in base.css. You never need to create new ones! Here's what's available:

### Colors

:root {
    /* Base Colors */
    --primary-color: #1E2E46;    /* Deep Blue */
    --secondary-color: #54b0af;  /* Cyan/Medium turquoise */
    --alt-secondary-color: #e9aa0e; /* Golden Yellow */
    --accent-color: #f83821;     /* Strawberry Red */
    
    /* Background Colors */
    --page-background: #EDEBDC;  /* Cream */
    --text-color: #242831;       /* Dark Navy */
    --element-background: #ffffff; /* White */
    
    /* Tag Colors */
    --tag-tech: #408A8F;         /* Teal for tech/development tags */
    --tag-strategy: #E85021;     /* Orange for strategy/marketing tags */
    --tag-ai: #7a8b69;           /* Muted green for AI/ML tags */
    --tag-secondary: #5f5655;    /* Brown for secondary tags */
}

### Layout Measurements

:root {
    /* Consistent Spacing */
    --nav-height: 60px;
    --section-spacing: 6rem;
    --element-spacing: 3rem;
    
    /* Content Widths */
    --content-width: 800px;      /* Standard content-wrap */
    --section-width: 1200px;     /* Maximum section width */
}

When selecting tag colors, match the content category:

• tag--strategy: Use for business, marketing, or strategic concepts
• tag--tech: Use for development, technical, or system-related items
• tag--ai: Use for AI, ML, or automation topics
• tag--secondary: Used for ALL 'secondary' tags (there are six of these for each entry) 

4. Start Main Content Section

</div></div></section>  <!-- Close tags section -->

<section class="section">
    <div class="content-wrap">
        <h2>Innovation Timeline</h2>

• New section for main content
• Back to standard content-wrap (800px) for text content
• Keep headings consistently styled with what's in content-strategy-framework.html


    Let me look at our asset content for realtime-social-system.txt. 
    
    The content breaks down into:

    1. A summary section about pioneering viral marketing techniques
    2. Two main case studies (UGGs 2013 and Super Bowl 2014)
    3. Metrics/results
    4. Context/approach
    5. Key takeaways

    This naturally suggests a different structure than the timeline format. Let me explain the layout options:

# Step 4: Content Display Options - Pages vs Cards

Looking at our content from the asset file, we need to understand when to place content directly on the page versus using cards.

1. Direct on Page Content

Our opening section is best directly on the page:

<section class="section">
    <div class="content-wrap">
        <h2>Pioneering Viral Marketing</h2>
        <p>As one of the first social media managers to implement real-time image editing...</p>
    </div>
</section>

WHY: Text content like this goes directly on the page when it's introducing or explaining concepts.

2. Card Layouts

For our UGGs and Super Bowl examples, we'll use cards because they include images with associated text:

<div class="content-wrap-wide">
    <div class="card-grid">
        <div class="card">
            <!-- Images go directly on card -->
            <img src="path/to/image.webp" alt="description">
            <!-- Text needs content wrapper -->
            <div class="content">
                <h3>Title</h3>
                <p>Description</p>
            </div>
        </div>
    </div>
</div>

    IMPORTANT CARD RULES:

    • Use card-grid when you need multiple cards in a row
    • Images go directly on the card - no wrapper needed
    • ALL text content must be wrapped in a content class
    • Use content-wrap-wide for grids of 2-3 cards
    • Use content-wrap-narrow for single card displays

Great! Now looking at the asset content for our two examples (UGGs and Super Bowl), we can demonstrate grid usage with cards:

# Step 5: Implementing Card Grid for Image/Text Pairs

Since each example has an image and associated text, we'll use a two-card grid layout:

<div class="content-wrap-wide">
    <div class="card-grid">
        <!-- UGGs Campaign Card -->
        <div class="card">
            <img src="https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/realtime-social-system/press-img-2-realtime-social-system.webp" 
                 alt="Yahoo News Coverage of Viral UGGs Image With Entire Article About Why UGGs Are Ugly">
            <div class="caption">
                <p>Yahoo News Coverage of Viral UGGs Image With Entire Article About Why UGGs Are Ugly</p>
            </div>
            <div class="content">
                <h3>First Viral Success: UGGs Campaign (2013)</h3>
                <p>As one of two team members managing PETA's social media presence, I pioneered rapid-response visual content creation that achieved breakthrough success:</p>
                <ul>
                    <li>Created one of the first brand accounts regularly producing custom visual content in real-time</li>
                    <li>Developed innovative workflow for rapid image editing and deployment</li>
                    <li>Achieved viral success leading to earned media coverage in Yahoo News</li>
                    <li>Established new benchmarks when most brands relied on text-only updates</li>
                </ul>
            </div>
        </div>

        <!-- Super Bowl Card -->
        <div class="card">
            <img src="https://raw.githubusercontent.com/seanivore/portfolio/refs/heads/new-clean-branch/assets/entries/realtime-social-system/press-img-1-realtime-social-system.webp" 
                 alt="Super Bowl Live-Tweeting Coverage by Brand Dot Com of Viral Tweet">
            <div class="caption">
                <p>Super Bowl Live-Tweeting Coverage by Brand Dot Com of Viral Tweet that paired an emotional image of a fox used for fur, in a fur farm cage with the words 'not yours to wear' and the image went viral during the game</p>
            </div>
            <div class="content">
                <h3>Super Bowl Live Coverage Innovation (2014)</h3>
                <p>Building on our rapid-response capabilities, we executed a breakthrough real-time campaign during one of the year's biggest media events:</p>
                <ul>
                    <li>Implemented strategic monitoring of live event opportunities</li>
                    <li>Deployed custom visual content during peak engagement moments</li>
                    <li>Achieved significant viral reach during high-competition timeframe</li>
                    <li>Generated substantial earned media coverage</li>
                </ul>
            </div>
        </div>
    </div>
</div>

    KEY POINTS:

    • content-wrap-wide ensures full width for the two-card layout
    • Images and their captions go directly on the card
    • All text content (headings, paragraphs, lists) goes inside the content div
    • The card-grid automatically handles spacing and responsive behavior
    • Each card maintains the same structure: image → caption → content

Looking at the asset file, we're getting to the metrics part - this is a great time to introduce our stats grid layout:

# Step 6: Displaying Metrics Using Stats Grid

For metrics and key numbers, we have a specific layout that arranges stats in a clean, impactful way:

<section class="section">
    <div class="content-wrap-narrow">
        <h2>Campaign Metrics</h2>
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number">862</div>
                <div class="stat-label">Retweets</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">385</div>
                <div class="stat-label">Favorites</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">2</div>
                <div class="stat-label">Press Features</div>
            </div>
        </div>
    </div>
</section>

    KEY POINTS:

    • Always use content-wrap-narrow (600px) for stats
    • Stats grid is designed for 3 items
    • Each stat needs both a number and label
    • Numbers should be impactful but not overwhelming
    • Labels should be concise, 1-2 words if possible

OK, looking at the "Innovation Context" and "Strategic Approach" sections - these are good candidates for direct-on-page content since they're explanatory text:

# Step 7: Explanatory Content Sections

Here's how we lay out supporting text content:

<section class="section">
    <div class="content-wrap">
        <h2>Innovation Context</h2>
        <p>In 2013-2014, real-time visual content creation on social media was still emerging:</p>
        <ul>
            <li>Most brands posted text-only updates</li>
            <li>Few organizations had workflows for rapid visual content</li>
            <li>Real-time image editing was not yet standard practice</li>
            <li>Live event coverage rarely included custom visuals</li>
        </ul>
    </div>

    <div class="content-wrap">
        <h2>Strategic Approach</h2>
        <p>Our novel approach combined several key elements:</p>
        <ul>
            <li>Monitored live events and trending topics for relevant messaging opportunities</li>
            <li>Maintained extensive visual asset library for rapid deployment</li>
            <li>Developed criteria for selecting and optimizing images</li>
            <li>Created replicable workflow for real-time content creation</li>
        </ul>
    </div>
</section>

    KEY POINTS:

    • Use standard content-wrap (800px) for text content
    • Each conceptually distinct section gets its own content-wrap
    • Lists and paragraphs need no special classes
    • Keep semantic HTML structure (h2 → p → ul → li)

OK, looking at the "Innovation Context" and "Strategic Approach" sections - these are good candidates for direct-on-page content since they're explanatory text:

# Step 7: Explanatory Content Sections

Here's how we lay out supporting text content:

<section class="section">
    <div class="content-wrap">
        <h2>Innovation Context</h2>
        <p>In 2013-2014, real-time visual content creation on social media was still emerging:</p>
        <ul>
            <li>Most brands posted text-only updates</li>
            <li>Few organizations had workflows for rapid visual content</li>
            <li>Real-time image editing was not yet standard practice</li>
            <li>Live event coverage rarely included custom visuals</li>
        </ul>
    </div>

    <div class="content-wrap">
        <h2>Strategic Approach</h2>
        <p>Our novel approach combined several key elements:</p>
        <ul>
            <li>Monitored live events and trending topics for relevant messaging opportunities</li>
            <li>Maintained extensive visual asset library for rapid deployment</li>
            <li>Developed criteria for selecting and optimizing images</li>
            <li>Created replicable workflow for real-time content creation</li>
        </ul>
    </div>
</section>

    KEY POINTS:

    • Use standard content-wrap (800px) for text content
    • Each conceptually distinct section gets its own content-wrap
    • Lists and paragraphs need no special classes
    • Keep semantic HTML structure (h2 → p → ul → li)

# Step 8: Adding the Conclusion Block

The conclusion/key takeaways get special styling to make them stand out. This uses the conclusion class which has a distinctive left border and background:

<section class="section">
    <div class="content-wrap">
        <h2>Key Takeaways</h2>
        <div class="conclusion">
            <p>This pioneering work in real-time social media marketing established new benchmarks during a pivotal period of digital transformation. By developing innovative workflows for rapid visual content creation when most brands relied on text-only updates, we demonstrated the powerful potential of timely, visual storytelling. Our strategic approach to live event coverage and trend monitoring, combined with efficient content production systems, created a replicable model that influenced industry practices. These early successes in viral marketing and earned media coverage helped establish best practices that continue to shape modern social media management, proving that rapid response visual content could consistently drive exceptional engagement and amplify brand messaging during key cultural moments.</p>
        </div>
    </div>
</section>

KEY POINTS:

• The conclusion class already has:
    • Left border accent using var(--accent-color)
    • Light background
    • Proper padding and margins
    • Responsive width
• Always place conclusion inside a standard content-wrap
• Best for single, substantial paragraphs summing up key points
• Usually the last section before related projects

# Step 9: Setting Up Related Projects Section

This is the final section of every project page. It's automatically populated by our JavaScript using all those data attributes we set up in the hidden project card at the beginning:

<section class="section related-projects">
    <div class="content-wrap">
        <h2>Related Projects</h2>
        <div class="related-grid">
            <!-- Related projects will be populated by related-projects.js -->
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer">
    <div class="footer-content">
        <div class="footer-copyright">© 2025 Sean August Horvath</div>
        <nav class="footer-nav">
            <a href="../index.html">Home</a>
            <a href="../about.html">About</a>
            <a href="../contact.html">Contact</a>
        </nav>
    </div>
</footer>

<!-- Scripts -->
<script src="../assets/js/parallax.js" defer></script>
<script src="../assets/js/related-projects.js"></script>
</body>
</html>

    KEY POINTS:

    • Structure must stay exactly as shown
    • The empty related-grid div will be filled automatically
    • Keep both script tags:

        • parallax.js for hero image effect
        • related-projects.js for populating related content

    • Don't forget to close all tags!

That completes our page! 