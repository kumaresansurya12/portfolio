const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.section-title, .about-content, .timeline-item, .skill-category, .project-card, .cert-card, .contact-content');
hiddenElements.forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Navbar Scroll Effect (Opaque on scroll)
/*
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});
*/

// Custom Cursor Animation
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Cursor Hover Effect
const clickableElements = document.querySelectorAll('a, button, .project-card, .cert-card, .skill-category, .hamburger');

clickableElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        document.body.classList.add('hover-active');
    });
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-active');
    });
});
