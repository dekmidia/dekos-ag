document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Sticky CTA visibility
    const whatsappBtn = document.getElementById('whatsapp-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            whatsappBtn.classList.remove('translate-y-24');
            whatsappBtn.classList.add('translate-y-0');
        } else {
            whatsappBtn.classList.remove('translate-y-0');
            whatsappBtn.classList.add('translate-y-24');
        }
    });

    // Cookie Consent
    const cookieModal = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('translate-y-full');
        }, 2000);
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieModal.classList.add('translate-y-full');
    });

    // Dynamic Copyright Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Reading Progress Bar
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
});
