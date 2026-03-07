document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // ScrollSpy & Smooth Scroll
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-primary');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('text-primary');
            }
        });
    });

    // WhatsApp Button Visibility
    const whatsappBtn = document.getElementById('whatsapp-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            whatsappBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
            whatsappBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            whatsappBtn.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    // FAQ Accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Cookie Consent
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookies = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('translate-y-full');
        }, 1000);
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookieModal.classList.add('translate-y-full');
    });

    // Dynamic Year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
