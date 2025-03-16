document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Close mobile menu on resize
    window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if(rect.top <= 100 && rect.bottom >= 100) {
                const id = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    });
});
