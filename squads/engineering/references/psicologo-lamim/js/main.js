document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll Animations (Fade-in / Slide)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 90;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2', 'bg-white/95', 'shadow-md');
            navbar.classList.remove('py-4', 'bg-white/80');
        } else {
            navbar.classList.add('py-4', 'bg-white/80');
            navbar.classList.remove('py-2', 'bg-white/95', 'shadow-md');
        }
    });

    // WhatsApp visibility and tooltip
    const whatsappBtn = document.getElementById('whatsapp-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappBtn.classList.add('show');
        } else {
            whatsappBtn.classList.remove('show');
        }
    });

    // Hide tooltip after 8 seconds
    setTimeout(() => {
        const tooltip = document.querySelector('.whatsapp-tooltip');
        if (tooltip) tooltip.style.opacity = '0';
    }, 8000);

    // Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const button = item.querySelector('button');
        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all others
            accordionItems.forEach(i => i.classList.remove('active'));

            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // Cookie Modal
    const cookieModal = document.getElementById('cookie-modal');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('translate-y-full');
        }, 2000);
    }

    acceptBtn.addEventListener('click', () => {
        cookieModal.classList.add('translate-y-full');
        localStorage.setItem('cookies-accepted', 'true');
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    // For simplicity in this vanilla version, we'll just alert or could add a full mobile menu logic
    // Add real mobile menu if needed, but the structure is there.
});
