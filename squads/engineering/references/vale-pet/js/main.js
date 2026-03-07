// Vale Pet Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled', 'shadow-md');
        } else {
            header.classList.remove('scrolled', 'shadow-md');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
            nav.classList.toggle('flex-col');
            nav.classList.toggle('absolute');
            nav.classList.toggle('top-full');
            nav.classList.toggle('left-0');
            nav.classList.toggle('w-full');
            nav.classList.toggle('bg-white');
            nav.classList.toggle('p-4');
            nav.classList.toggle('shadow-xl');
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-content').classList.add('hidden');
            });

            // Open clicked
            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.faq-content').classList.remove('hidden');
            }
        });
    });

    // WhatsApp Button Visibility
    const whatsappBtn = document.getElementById('whatsapp-premium');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappBtn.classList.remove('opacity-0', 'translate-y-20', 'scale-0');
            whatsappBtn.classList.add('opacity-100', 'translate-y-0', 'scale-100');
        } else {
            whatsappBtn.classList.add('opacity-0', 'translate-y-20', 'scale-0');
            whatsappBtn.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
        }
    });

    // Cookie Modal Logic
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookies = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('translate-y-full');
        }, 2000);
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookieModal.classList.add('translate-y-full');
    });

    // Current Year
    document.getElementById('year').textContent = new Date().getFullYear();
});
