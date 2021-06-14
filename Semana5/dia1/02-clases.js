/*
Las clases son estructuras que permiten crear 
objetos con las propiedades y metodos que tienen 
sus clases Padres*/

class Producto {
  constructor(desc = "", prec = 0, color = "") {
    this.descripcion = desc;
    this.precio = prec;
    this.color = color;
  }

  imprimirDatos = () => {
    console.log("**Datos del producto**");
    console.log(`Nombre: ${this.descripcion}`);
    console.log(`Precio: S/. ${this.precio}`);
    console.log(`Color: ${this.color}`);
  };
}

let objProducto1 = new Producto("Play Station 6", 4000.0, "blanco");
objProducto1.color = "Gris";
objProducto1.imprimirDatos();

let objProducto2 = new Producto("", 0, "");
console.log(objProducto2);

//Constructor es una funcion que se llamara automaticamente cuando se ejecuta la clase
//en este caso cuando se ejecuta Producto1

/*Creando objetos de la clase Array
02 formas*/

let arreglo1 = [90, 8, 7];
let arreglo2 = new Array();
arreglo2.push(50);
arreglo2.push(34);
arreglo2.push(8);

console.log(arreglo1);
console.log(arreglo2);

/*Creando numbers desde su clase*/

let edad = 29;
let edad2 = new Number(20);
console.log(edad);
console.log(edad2);

let rpta = edad + edad2;
console.log(rpta);
