import Typed from 'typed.js';
// // BARRA DE SCROLL SUPERIOR

const indicator = document.querySelector(".indicator span");
const progressBar = () => {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

  indicator.style.width = `${scrollPercent}%`;
};
window.addEventListener("scroll", progressBar);


