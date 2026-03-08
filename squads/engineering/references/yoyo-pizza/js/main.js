// Pizzaria Yoyo - Main Logic

document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp Button Visibility
    const whatsappBtn = document.getElementById('whatsapp-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappBtn.classList.add('show');
        } else {
            whatsappBtn.classList.remove('show');
        }
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Cookie Consent
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookies = document.getElementById('accept-cookies');
    
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('hidden');
            cookieModal.classList.add('flex');
        }, 2000);
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieModal.classList.add('hidden');
    });

    // Simple Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});
