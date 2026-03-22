const flor = document.getElementById("florPrincipal");
const petalosContainer = document.querySelector(".petalos");
const floresExtraContainer = document.getElementById("floresExtra");
const nota = document.getElementById("nota");
const musica = document.getElementById("musica");

/* Crear pétalos iniciales */
function crearPetalos(cantidad, contenedor) {
    for (let i = 0; i < cantidad; i++) {
        const petalo = document.createElement("div");
    petalo.style.transform = `
    translate(-50%, -50%)
    rotate(${i * (360 / cantidad)}deg)
    translateY(-50px)
`;
    }
}

/* Crear flor extra */
function crearFlorExtra(x, y) {
    const florExtra = document.createElement("div");
    florExtra.classList.add("flor-extra");

    florExtra.style.left = x + "px";
    florExtra.style.top = y + "px";

    const centro = document.createElement("div");
    centro.classList.add("centro");

    const petalos = document.createElement("div");
    petalos.classList.add("petalos");

    crearPetalos(10, petalos);

    florExtra.appendChild(centro);
    florExtra.appendChild(petalos);

    floresExtraContainer.appendChild(florExtra);
}

/* Evento click */
flor.addEventListener("click", () => {

    /* Evitar múltiples activaciones exageradas */
    if (flor.classList.contains("activada")) return;
    flor.classList.add("activada");

    /* Más pétalos (explosión visual) */
    crearPetalos(20, petalosContainer);

    /* Mostrar nota */
    nota.style.display = "block";

    /* Reproducir música */
    musica.play();

    /* Crear múltiples flores en pantalla */
    for (let i = 0; i < 12; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        setTimeout(() => {
            crearFlorExtra(x, y);
        }, i * 150);
    }
});

/* Inicializar flor principal */
crearPetalos(12, petalosContainer);
