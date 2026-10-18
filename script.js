const cielo = document.getElementById("cielo");

// Crear 160 estrellas aleatorias
for (let i = 0; i < 160; i++) {
    const estrella = document.createElement("span");

    estrella.className = "estrella";
    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.top = Math.random() * 100 + "%";
    estrella.style.animationDelay = Math.random() * 4 + "s";
    estrella.style.animationDuration =
        (2 + Math.random() * 3) + "s";

    cielo.appendChild(estrella);
}

// Agregar una estrella especial
const estrellaEspecial = document.createElement("span");

estrellaEspecial.className = "estrella especial";
estrellaEspecial.style.left = "24%";
estrellaEspecial.style.top = "25%";

cielo.appendChild(estrellaEspecial);

// Seleccionar elementos de la página
const boton = document.getElementById("abrir");
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const cancion = document.getElementById("cancion");
const reproductor = document.getElementById("reproductor");
const estadoMusica = document.getElementById("estadoMusica");

let cartaAbierta = false;

// Abrir la carta y comenzar la música
boton.addEventListener("click", async () => {
    if (cartaAbierta) return;

    cartaAbierta = true;
    boton.disabled = true;
    boton.textContent = "Abriendo tu carta... 💙";

    inicio.style.opacity = "0";

    // Mostrar la carta después de la transición
    setTimeout(() => {
        inicio.style.display = "none";
        carta.style.display = "block";
        reproductor.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 700);

    // Intentar reproducir el audio tras el clic
    try {
        await cancion.play();

        estadoMusica.textContent =
            "Esta canción me recuerda a ti. 💙";
    } catch (error) {
        estadoMusica.textContent =
            "Pulsa play para escuchar nuestra canción. 💙";
    }
});