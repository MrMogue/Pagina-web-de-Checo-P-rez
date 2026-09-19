// Fecha de debut de Checo Pérez en la F1: Gran Premio de Australia 2011
const DEBUT_F1 = new Date('2011-03-27T00:00:00');

// Rótulos dinámicos de la tabla de datos clave
const stats = {
    carreras: '250+',
    victorias: '6',
    podios: '39'
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Contador de días desde su debut
    calcularDias();
    setInterval(calcularDias, 1000);

    // 2. Animación reveal al hacer scroll
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.2 }
    );
    revealEls.forEach((el) => observer.observe(el));

    // 3. Botón "volver arriba"
    const btnArriba = document.getElementById('btn-arriba');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnArriba.classList.add('visible');
        } else {
            btnArriba.classList.remove('visible');
        }
    });
    btnArriba.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Actualizar rótulos de la tabla con animación
    document.getElementById('carreras').textContent = stats.carreras;
    document.getElementById('victorias').textContent = stats.victorias;
    document.getElementById('podios').textContent = stats.podios;
});

function calcularDias() {
    const ahora = new Date();
    const diferencia = ahora - DEBUT_F1;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    document.getElementById('contador').textContent =
        `${dias.toLocaleString('es-MX')} días · ${horas}:${minutos}:${segundos}`;
}

// 5. Rótulo dinámico del hero (cambiante según la hora del día)
function saludoDinamico() {
    const hora = new Date().getHours();
    const tagline = document.getElementById('tagline');
    if (hora >= 0 && hora < 12) {
        tagline.textContent = 'Piloto mexicano de Fórmula 1 · Buenos días';
    } else if (hora >= 12 && hora < 19) {
        tagline.textContent = 'Piloto mexicano de Fórmula 1 · Buenas tardes';
    } else {
        tagline.textContent = 'Piloto mexicano de Fórmula 1 · Buenas noches';
    }
}
saludoDinamico();