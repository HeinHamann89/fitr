// Scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle functionality
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlayBackground = document.querySelector('.overlay-background');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlayBackground.classList.toggle('active');
});

// Close mobile menu when clicking outside
overlayBackground.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlayBackground.classList.remove('active');
});

// Accessibility: Allow hamburger menu toggle via keyboard
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlayBackground.classList.toggle('active');
    }
});
