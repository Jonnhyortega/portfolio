// // BARRA DE SCROLL SUPERIOR

const indicator = document.querySelector(".indicator span");

const progressBar = () => {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

  indicator.style.width = `${scrollPercent}%`;
};

window.addEventListener("scroll", progressBar);

// FUNCION PARA ABRIR MENU
let topDeMenu = document.getElementById("header");
let botonOpenMenu = document.getElementById("open_header");
const abrirCerrarMenu = () => {
  if (topDeMenu.style.top === "-13%") {
    topDeMenu.style.top = "0";
    botonOpenMenu.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  } else if ((topDeMenu.style.top = "0")) {
    topDeMenu.style.top = "-13%";
    botonOpenMenu.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';
  }
};

let leftMenu = document.getElementById("header_mobiles");
const abrirCerrarMenuMobiles = () => {
  if (leftMenu.style.left === "-10%") {
    leftMenu.style.left = "0";
    botonOpenMenu.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  } else if ((leftMenu.style.left = "0")) {
    leftMenu.style.left = "-10%";
    botonOpenMenu.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
  }
};

// FUNCION PARA MOSTRAR #BIO-MENSAJE

const maquinaEscribir = () => {
  let bioMensaje = document.getElementById("bio-mensaje");
  let contenido =
    " Después de años de dedicación al deporte, canalice mi energía y determinación hacia el mundo del desarrollo web. Buscando innovar condiseños armónicos y originales.";

  bioMensaje.innerHTML = contenido;
};
