// SELEÇÃO DOS ELEMENTOS DO TEMA
const btnTema = document.getElementById('toggle-theme');

function definirTema(tema) {
    if (tema === 'escuro') {
        document.body.classList.add('dark-mode');
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        btnTema.textContent = '🌙 Modo Escuro';
    }
}

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo) {
    definirTema(temaSalvo);
} else {
    definirTema('claro');
}

btnTema.addEventListener('click', () => {
    const eModoEscuro = document.body.classList.contains('dark-mode');
    
    if (eModoEscuro) {
        definirTema('claro');
        localStorage.setItem('tema', 'claro');
    } else {
        definirTema('escuro');
        localStorage.setItem('tema', 'escuro');
    }
});

// CONTROLE DA ABA LATERAL (PATRONO)
const btnPatronoHero = document.getElementById('open-patrono');
const btnFecharDrawer = document.getElementById('close-patrono');
const drawerPatrono = document.getElementById('drawer-patrono');
const drawerOverlay = document.getElementById('drawer-overlay');

function abrirDrawer() {
    drawerPatrono.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharDrawer() {
    drawerPatrono.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (btnPatronoHero) btnPatronoHero.addEventListener('click', abrirDrawer);

btnFecharDrawer.addEventListener('click', fecharDrawer);
drawerOverlay.addEventListener('click', fecharDrawer);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharDrawer();
});
