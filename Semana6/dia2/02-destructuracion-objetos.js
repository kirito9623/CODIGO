/*Destructuracion de Objetos*/

let objPais = {
  nombre: "Peru",
  poblacion: 33000000,
  idiomas: ["Castellano", "Aymara", "Quechua"],
  monarquia: false,
};

//1. Forma correcta de copiar un objeto

let copiaPais = { ...objPais };

console.log(copiaPais);

// 2. Copiando un arreglo, y agregando un campo adicional
// a dicho objetos

let copiaPais2 = {
  ...objPais,
  gentilicio: "peruano/peruana",
};

console.log(copiaPais2);

// 3.Copiando un arreglo, modificando uno de sus atributos
// y agregando uno nuevo.

let colombia = {
  ...objPais,
  nombre: "Colombia",
  poblacion: 50000000,
  gentilicio: "colombiano",
};

console.log(colombia);

//Forma tradicional de obtener el valor de un atributo interno
// const nombre = colombia.nombre;

const { nombre, poblacion } = colombia;
console.log(nombre);
console.log(poblacion);
console.log(colombia.gentilicio);




const imprimirPoblacion = ({ nombre, poblacion }) => {
  console.log(`Poblacion de ${nombre}: ${poblacion} habitantes`);
};
imprimirPoblacion(objPais);
