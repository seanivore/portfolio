document.addEventListener('DOMContentLoaded', () => {
    const heroBackground = document.querySelector('.hero-background');
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const moveDistance = windowHeight / 2; // Adjust intensity if needed
        heroBackground.style.transform = `translateY(${scrollY * moveDistance / windowHeight}px)`;
    });
});