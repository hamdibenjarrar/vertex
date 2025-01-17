// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        navbarMenu.classList.toggle('is-active');
    });
});

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form handling logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}