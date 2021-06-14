/*
Como insertar un elemento en un arreglo
arreglo.push
Insertando a un elemento en la posicion final de un arreglo */

let marcaDeAutos = [];

marcaDeAutos.push("Hyundai");
marcaDeAutos.push("kia");
marcaDeAutos.push("Audi");


/*
    Ejercicio: Hacer que el usuario pueda ingresar 5 marcas adicionales
*/ 


for(let i = 0; i < 5; i++){
    let marca = prompt("Ingrese una nueva marca");
    marcaDeAutos.push(marca);
}

console.log (marcaDeAutos);