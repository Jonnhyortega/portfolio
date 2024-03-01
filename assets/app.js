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

let leftMenu = document.getElementById("header");
const abrirCerrarMenuMobiles = () => {
  if (leftMenu.style.left === "-10%") {
    leftMenu.style.left = "-1%";
    botonOpenMenu.innerHTML = `<i class="fa-solid fa-lock"></i>`;
  } else if ((leftMenu.style.left = "0")) {
    leftMenu.style.left = "-10%";
    botonOpenMenu.innerHTML = `<i class="fa-solid fa-lock-open"></i>`;
  }
};




// FUNCION PARA MOSTRAR #BIO-MENSAJE

const desplegarMensaje = () => {
  let content = document.getElementById("content");

  if (content === "1rem") {
    content.style.height = "15rem";
  } else if (content === "15rem") {
    content.style.height = "1rem";
  }
};


