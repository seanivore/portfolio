document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    const container = document.querySelector('.presentation-style');
    if (!container) return;

    // Create thumbnails
    const slides = document.querySelectorAll('.slides img');
    const thumbnailsContainer = container.querySelector('.slide-thumbnails');
    
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'slide-thumbnail';
        thumbnail.style.backgroundImage = `url(${slide.src})`;
        thumbnail.addEventListener('click', () => showSlide(index + 1));
        thumbnailsContainer.appendChild(thumbnail);
    });

    function moveSlide(n) {
        showSlide(slideIndex += n);
    }

    function showSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        // Remove active class from all thumbnails
        const thumbnails = document.querySelectorAll('.slide-thumbnail');
        thumbnails.forEach(thumb => {
            thumb.classList.remove('active');
        });

        // Show current slide and activate thumbnail
        slides[slideIndex - 1].style.display = "block";
        thumbnails[slideIndex - 1].classList.add('active');

        // Update counter
        const counter = container.querySelector('.slide-counter');
        counter.textContent = `${slideIndex} / ${slides.length}`;
    }

    // Initialize first slide
    showSlide(slideIndex);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            moveSlide(-1);
        } else if (e.key === 'ArrowRight') {
            moveSlide(1);
        }
    });

    // Expose moveSlide to global scope for button clicks
    window.moveSlide = moveSlide;
});
