let users = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    age: 12,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    age: 18,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    age: 15,
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    age: 23,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    age: 17,
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    age: 19,
  },
];

let enlaces = [
  { id: 1, texto: "Home", path: "/home" },
  { id: 2, texto: "Portafolio", path: "/portafolio" },
  { id: 3, texto: "Nosotros", path: "/nosotros" },
  { id: 4, texto: "Contacto", path: "/contacto" },
];

let cuerpoTabla = document.getElementById("cuerpo-tabla");
let navegacion = document.getElementById("navegacion");

const fillTable = () => {
  let filas = "";

  users.forEach((users, i) => {
    filas += `<tr>
                <td>${i + 1}</td>
                <td>${users.id}</td>
                <td>${users.first_name}${users.last_name}</td>
                <td><img src="${users.avatar}" alt="user photo"></td>
                <td>${users.age} <button>Eliminar</button> </td>
               </tr>`;

    cuerpoTabla.innerHTML = filas;
  });
};

fillTable();

const fillLink = () => {
  let link = "";
  enlaces.forEach((enlaces, i) => {
    link += ` <li><a href="${enlaces.path}">${enlaces.path}</a></li>  `;
    navegacion.innerHTML = link;
  });

  /*
    Llenar la navegacion con li's y dentro de cada li
    colocar una etiqueta <a> con href al path del objeto
    y con el campo "texto" como texto por cada elemento en la lista
*/
};
fillLink();
