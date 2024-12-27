document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    const heroTitle = document.querySelector('.hero-title');
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const moveDistance = windowHeight / 2; // Adjust this value to control parallax intensity
        heroImage.style.transform = `translateY(${scrollY * moveDistance / windowHeight}px)`;
        heroTitle.style.transform = `translateY(${scrollY * -0.5}px)`; // Move title up faster
    });
});