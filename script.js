document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="Projects.html">Projects</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
    `;
    document.body.appendChild(overlay);

    menuToggle.addEventListener('click', () => {
        overlay.classList.toggle('active');
    });

    // Close overlay when clicking outside or on a link
    overlay.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1s ease-in forwards`;
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with data-animate attribute
    document.querySelectorAll('section, .business-info, #contact p').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
