// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark/90', 'backdrop-blur-md', 'py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('bg-dark/90', 'backdrop-blur-md', 'py-2');
        navbar.classList.add('py-4');
    }
});

// Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
}

menuToggle.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fechar todos
        faqItems.forEach(i => i.classList.remove('active'));

        // Abrir o clicado se não estava ativo
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// WhatsApp JoinChat Logic
const whatsappJoinchat = document.getElementById('whatsapp-joinchat');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        if (whatsappJoinchat) whatsappJoinchat.classList.add('show');
    } else {
        if (whatsappJoinchat) whatsappJoinchat.classList.remove('show');
    }
});

// Cookie Consent
const cookieModal = document.getElementById('cookie-modal');
const acceptCookies = document.getElementById('accept-cookies');

// Mostrar modal com atraso e verificar se já foi aceito
if (cookieModal) {
    setTimeout(() => {
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieModal.classList.add('show');
        }
    }, 2000);
}

if (acceptCookies) {
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieModal.classList.remove('show');
    });
}


// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Counter Animation Logic
const counters = document.querySelectorAll('.counter-value');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer for Counters
const observerOptions = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.getElementById('stats-container');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// Simple Parallax Effect (Complementary to CSS)
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const heroBg = document.querySelector('.parallax-bg');
    if (heroBg && window.innerWidth > 1024) {
        heroBg.style.backgroundPositionY = `${scrollValue * 0.5}px`;
    }
});
