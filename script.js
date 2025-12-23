const escena1 = document.getElementById("escena-1");
const escena2 = document.getElementById("escena-2");
const escena3 = document.getElementById("escena-3");

const corazon = document.getElementById("zona-corazon");
const textoCorto = document.getElementById("texto-corto");

corazon.addEventListener("click", () => {
    escena1.classList.remove("activa");
    escena2.classList.add("activa");
});

textoCorto.addEventListener("click", () => {
    escena2.classList.remove("activa");
    escena3.classList.add("activa");
});
