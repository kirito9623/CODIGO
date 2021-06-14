/*
arreglo.fing(elemento,indice?,arreglo?)=>{})
metodo que recorre todos los elementos de un arreglo
- El metodo find retorna un unico elemento
-Similiar al metodo filter, se debe cumplir una condicion
para que el elemento cumpla con esa condicion, sea retornado
-Solo es retornado el primer elemento que cumpla
con la condicion
- Si ningun elemneto cumple con la condicion, se retorna un 
Undefined
*/

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

/*Encontrar al elemento de ID=3
Hacerlo de la forma corta usando el metodo find
*/


let usuarioId3 = users.find((usuario, i) => usuario.id === 3);
console.log(usuarioId3);
