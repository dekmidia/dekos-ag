document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation Library
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-stone-50/90', 'bg-white/95');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-stone-50/90');
        }
    });

    // Set Current Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // FAQ Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('svg');
            
            // Toggle current
            if (content.style.height && content.style.height !== '0px') {
                // Close
                content.style.height = '0px';
                content.classList.replace('opacity-100', 'opacity-0');
                icon.classList.remove('rotate-180');
            } else {
                // Close all others
                document.querySelectorAll('.accordion-content').forEach(c => {
                    c.style.height = '0px';
                    c.classList.replace('opacity-100', 'opacity-0');
                });
                document.querySelectorAll('.accordion-header svg').forEach(i => {
                    i.classList.remove('rotate-180');
                });
                
                // Open clicked
                content.style.height = content.scrollHeight + 'px';
                content.classList.replace('opacity-0', 'opacity-100');
                icon.classList.add('rotate-180');
            }
        });
    });

    // Premium Floating WhatsApp Button Visibility
    const joinchat = document.getElementById('joinchat');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            joinchat.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
        } else {
            joinchat.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        }
    });

    // LGPD Cookie Consent Modal
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    // Check if already accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        // Show after 1.5s
        setTimeout(() => {
            cookieModal.classList.remove('translate-y-full');
        }, 1500);
    }
    
    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieModal.classList.add('translate-y-full');
    });
});
