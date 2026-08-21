// Controle do Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const menuMobile = document.getElementById('menu-mobile');

menuToggle.addEventListener('click', function() {
    menuMobile.classList.toggle('aberto');
});

function fecharMenu() {
    menuMobile.classList.remove('aberto');
}

// Troca de tom no fundo do Navbar ao rolar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.98)';
    } else {
        navbar.style.background = 'rgba(18, 18, 18, 0.92)';
    }
});

// Animação de entrada via Intersection Observer
const secoes = document.querySelectorAll('.secao, .secao-alt, .card, .evento');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'aparecer 0.6s ease both';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

secoes.forEach(function(secao) {
    secao.style.opacity = '0';
    observer.observe(secao);
});