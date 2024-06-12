const containerProjects = document.querySelector("#container_projects");
const projects = [
  {
    name: "Store",
    img: "/assets/imgs/chulos-terrazos.png",
    link: "https://decoracion-chulo.vercel.app/",
    language: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-css3-alt"></i>',
      '<i class="fa-brands fa-js"></i>',
    ],
  },
  {
    name: "To-do list App",
    img: "/assets/imgs/to-do-list.jpg",
    link: "https://lista-de-tareas-topaz.vercel.app/",
    language: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-css3-alt"></i>',
      '<i class="fa-brands fa-js"></i>',
    ],
  },
  {
    name: "Store",
    img: "/assets/imgs/grantMovies.png",
    link: "https://eccomerce-de-peliculas.vercel.app/",
    language: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-css3-alt"></i>',
      '<i class="fa-brands fa-js"></i>',
      '<i class="fa-brands fa-bootstrap"></i>',
    ],
  },
  {
    name: "Static landing",
    img: "/assets/imgs/ClarifionProyect.png",
    link: "https://clarifion-ejam-project.vercel.app/",
    language: [
      '<i class="fa-brands fa-js"></i>',
      '<i class="fa-brands fa-react"></i>'
    ]
  },
  {
    name: "Static landing",
    img: "/assets/imgs/venum-face.png",
    link: "https://landing-venum.vercel.app/",
    language: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-css3-alt"></i>',
    ],
  }
];
function templateCard(object) {
  return `
  <div class="project-tile">
  <span id="proyect-title">${object.name}</span>
  <span id="emoji-animado">👇</span>
  <a
    id="proyect"
    target="_blank"
    href="${object.link}"
  >
    <img
      id="img-project"
      src="${object.img}"
      alt="To do list"
    />
  </a>

  <span id="icons-languages">
    ${renderLanguages(object.language)}
  </span>
</div>
  `;
}

function renderLanguages(array) {
  return array.join("");
}

function renderProjects(array) {
  containerProjects.innerHTML = array.map((p) => templateCard(p)).join("");
}


document.addEventListener("DOMContentLoaded", renderProjects(projects));

