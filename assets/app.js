// BARRA DE SCROLL SUPERIOR

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
