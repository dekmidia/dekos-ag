// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS Animation com parâmetros premium
    AOS.init({
        once: true,
        offset: 80,
        duration: 1000,
        easing: 'ease-out-cubic',
        anchorPlacement: 'top-bottom',
    });

    // 2. Sticky Header Behavior
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('glass', 'py-2');
            header.classList.remove('bg-transparent', 'py-4');
        } else {
            header.classList.add('bg-transparent', 'py-4');
            header.classList.remove('glass', 'py-2');
        }
    });

    // 3. Smooth Scroll Integrado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Premium FAQ Acordeão Logica
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-button');

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Fechar todos
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.faq-button').setAttribute('aria-expanded', 'false');
                otherItem.classList.remove('border-brand-500', 'bg-brand-50');
                otherItem.classList.add('border-slate-200', 'bg-white');
            });

            // Abrir selecionado
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                item.classList.add('border-brand-500', 'bg-brand-50');
                item.classList.remove('border-slate-200', 'bg-white');
            }
        });
    });

    // 5. Botão Flutuante
    const joinchat = document.getElementById('joinchat');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            joinchat.classList.remove('translate-y-24', 'opacity-0', 'scale-50');
            joinchat.classList.add('translate-y-0', 'opacity-100', 'scale-100');
        } else {
            joinchat.classList.add('translate-y-24', 'opacity-0', 'scale-50');
            joinchat.classList.remove('translate-y-0', 'opacity-100', 'scale-100');
        }
    });

    // WhatsApp Links
    const phone = "5511994283787";
    const text = "Olá Roberto, acessei seu site e gostaria de conversar sobre a terapia.";
    const wpUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    const wpLinks = document.querySelectorAll('.whatsapp-link');
    wpLinks.forEach(link => {
        link.setAttribute('href', wpUrl);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        // Garantir que o clique funcione mesmo com preventDefault global
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // 6. Modal LGPD
    const cookieModal = document.getElementById('cookie-modal');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookies_accepted')) {
        setTimeout(() => {
            cookieModal.classList.remove('translate-y-full');
        }, 2000);
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookies_accepted', 'true');
        cookieModal.classList.add('translate-y-full');
    });
});
