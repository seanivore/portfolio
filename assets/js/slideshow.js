let slideIndex = 1;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    const counter = document.querySelector('.slide-counter');
    
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
    
    // Show current slide(s)
    const container = slides[0].closest('.slideshow-container');
    if (container.classList.contains('book-style')) {
        // Show two slides side by side
        if (slideIndex < slides.length) {
            slides[slideIndex - 1].style.display = "inline-block";
            slides[slideIndex].style.display = "inline-block";
            slides[slideIndex - 1].style.width = "50%";
            slides[slideIndex].style.width = "50%";
        } else {
            // If we're at the last slide, just show it
            slides[slideIndex - 1].style.display = "inline-block";
            slides[slideIndex - 1].style.width = "100%";
        }
    } else {
        // Show single slide
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.width = "100%";
    }
    
    // Update counter
    counter.textContent = slideIndex + " / " + slides.length;
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
