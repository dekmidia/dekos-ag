document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
    });

    // Sticky Header Logic
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled', 'shadow-md');
            header.classList.remove('py-4');
            header.classList.add('py-2');
        } else {
            header.classList.remove('scrolled', 'shadow-md');
            header.classList.remove('py-2');
            header.classList.add('py-4');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        }
    });

    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // FAQ Accordion Logic
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const expanded = button.getAttribute('aria-expanded') === 'true';

            // Close all others
            accordionButtons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.classList.remove('open');
                btn.nextElementSibling.style.maxHeight = null;
            });

            // Toggle current
            if (!expanded) {
                button.setAttribute('aria-expanded', 'true');
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Sticky WhatsApp Logic
    const stickyWhatsapp = document.getElementById('sticky-whatsapp');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            stickyWhatsapp.classList.add('show');
        } else {
            stickyWhatsapp.classList.remove('show');
        }
    });
});
