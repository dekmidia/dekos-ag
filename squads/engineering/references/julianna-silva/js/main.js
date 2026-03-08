/* Main JS for Julianna Silva */

document.addEventListener('DOMContentLoaded', () => {
    // 1. WhatsApp Button Logic
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappTooltip = document.getElementById('whatsapp-tooltip');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappBtn.classList.remove('opacity-0', 'invisible', 'translate-y-10');
            whatsappBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
        } else {
            whatsappBtn.classList.add('opacity-0', 'invisible', 'translate-y-10');
            whatsappBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
        }
    });

    // 2. FAQ Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(i => i.classList.remove('active'));
            
            // Toggle current if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. Cookie Consent Modal
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookies = document.getElementById('accept-cookies');
    
    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('translate-y-full');
        }, 2000);
    }

    acceptCookies.addEventListener('click', () => {
        cookieModal.classList.add('translate-y-full');
        localStorage.setItem('cookies-accepted', 'true');
    });

    // 4. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5. Dynamic Year for Copyright
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
