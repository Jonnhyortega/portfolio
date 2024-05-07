// // BARRA DE SCROLL SUPERIOR
const indicator = document.querySelector(".indicator span");
const progressBar = () => {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

  indicator.style.width = `${scrollPercent}%`;
};
window.addEventListener("scroll", progressBar);


// CONTENTINDO CONTACTO SHOW
const mostrarContenido = () => {
  let contenidoContacto = document.querySelector("#contenido_contacto");
  if(contenidoContacto.style.display === "none"){
    contenidoContacto.style.display = "flex";
  } else {
    contenidoContacto.style.display = "none"
  }
}

document.querySelector("#mostrar_contenido_contacto").addEventListener("click", mostrarContenido);


