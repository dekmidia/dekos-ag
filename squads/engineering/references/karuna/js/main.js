document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // FAQ Accordion logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Sticky CTA logic (Joinchat style)
    const stickyCta = document.getElementById('sticky-cta');
    setTimeout(() => {
        stickyCta.classList.add('show');
    }, 1500); // Show after 1.5 seconds regardless of scroll

    // Cookie Consent Logic
    const cookieModal = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('hidden');
            cookieModal.classList.add('flex');
        }, 2000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieModal.classList.add('hidden');
    });

    // Dynamic Year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
