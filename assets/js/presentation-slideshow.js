document.addEventListener('DOMContentLoaded', () => {
    // Initialize all slideshows
    document.querySelectorAll('.slideshow-container.presentation-style').forEach(container => {
        try {
            initSlideshow(container);
        } catch (error) {
            console.error('Error initializing slideshow:', error);
        }
    });
});

function initSlideshow(container) {
    const slides = container.querySelectorAll('.slides img');
    const thumbnailsContainer = container.querySelector('.slide-thumbnails');
    const counter = container.querySelector('.slide-counter');
    
    if (!slides.length || !thumbnailsContainer || !counter) {
        throw new Error('Missing required slideshow elements');
    }

    // Create thumbnails
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'slide-thumbnail';
        thumbnail.style.backgroundImage = `url(${slide.src})`;
        thumbnail.addEventListener('click', () => showSlide(container, index + 1));
        thumbnailsContainer.appendChild(thumbnail);
    });

    // Initialize first slide
    container.slideIndex = 1;
    showSlide(container, 1);

    // Add click handlers to buttons
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    
    if (prevButton) {
        prevButton.onclick = function() {
            const currentIndex = container.slideIndex;
            showSlide(container, currentIndex - 1);
        };
    }
    
    if (nextButton) {
        nextButton.onclick = function() {
            const currentIndex = container.slideIndex;
            showSlide(container, currentIndex + 1);
        };
    }

    // Add keyboard navigation when container is focused
    container.tabIndex = 0; // Make container focusable
    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            showSlide(container, container.slideIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showSlide(container, container.slideIndex + 1);
        }
    });
}

function showSlide(container, n) {
    try {
        const slides = container.querySelectorAll('.slides img');
        const thumbnails = container.querySelectorAll('.slide-thumbnail');
        const counter = container.querySelector('.slide-counter');

        // Update slideIndex
        if (n > slides.length) {
            n = 1;
        }
        if (n < 1) {
            n = slides.length;
        }
        container.slideIndex = n;

        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        // Remove active class from all thumbnails
        thumbnails.forEach(thumb => {
            thumb.classList.remove('active');
        });

        // Show current slide and activate thumbnail
        slides[n - 1].style.display = "block";
        thumbnails[n - 1].classList.add('active');

        // Update counter
        counter.textContent = `${n} / ${slides.length}`;
    } catch (error) {
        console.error('Error showing slide:', error);
    }
}
