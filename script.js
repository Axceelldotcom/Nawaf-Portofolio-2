// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');

function showMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideMobileMenu() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = '';
}

mobileMenuButton.addEventListener('click', showMobileMenu);
closeMobileMenuButton.addEventListener('click', hideMobileMenu);

// Hide mobile menu when a link inside it is clicked
mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', hideMobileMenu);
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-highlight');
        link.classList.add('text-gray-600');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('text-highlight');
            link.classList.remove('text-gray-600');
        }
    });
});

// Initial check for active link on page load
window.dispatchEvent(new Event('scroll'));
