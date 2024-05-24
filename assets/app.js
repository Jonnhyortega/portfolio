const projectTitle = document.querySelector("#project-title")
const contenidoContacto = document.querySelector("#contenido_contacto");
const containerProjects = document.querySelector("#container_projects")
// // BARRA DE SCROLL SUPERIOR
const indicator = document.querySelector(".indicator span");
const progressBar = () => {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

  indicator.style.width = `${scrollPercent}%`;
};
window.addEventListener("scroll", progressBar);


// function to SHOW PROJECTS & CONTACT


document.querySelector("#mostrar_contenido_contacto").addEventListener("click", () => {
  if(contenidoContacto.style.display === "none"){
    contenidoContacto.style.display = "flex";
  }else {
    contenidoContacto.style.display = "none"
  }

});
projects.addEventListener("click", () => {
  if(containerProjects.style.display === "none"){
    containerProjects.style.display = "flex";
  }else{
    containerProjects.style.display = "none";
  }
  });

