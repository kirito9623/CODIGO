/**
 * Ejercicio:
 * Dados dos arreglos (castellano e inglés):
 * El usuario escribirá 1 ó 2:
 * 1. para traducir una palabra del castellano al inglés
 * 2. para traducir una palabra del inglés al castellano
 * En ambos casos el usuario deberá ingresar primero la opción y
 * luego la palabra a traducir
 * El sistema deberá mostrar la palabra traducida ó en su defecto
 * un error que indique que no se encuentra la palabra en la BD
 */

let castellano = ["hola", "bien", "adios", "mañana", "comer", "cantar"];
let ingles = ["hello", "good", "bye", "tomorrow", "eat", "sing"];
let opcion = +prompt("Ingrese opcion 1: C-I, 2: I-C");
let palabra = prompt("Ingrese la palabra");
let respuesta = "";

if (opcion === 1){
    for (let i = 0; i < castellano.length; i++) {
        if (palabra === castellano[i]){
            console.log(`Palabra encontrada`);
            respuesta = `${palabra} traducido al ingles: ${ingles[i]}`;
        }
    }
} else {
    for (let i = 0; i < ingles.length; i++) {
        if (palabra === ingles[i]){
            console.log(`Palabra encontrada`);
            respuesta = `${palabra} traducido al español: ${castellano[i]}`;
        }
        
    }
}

if(respuesta === ""){
    console.error("Ups! la palabra buscada no existe en la BD");
} else{
    console.error(respuesta);
}

// TAREA: 
/*Investigar el uso de la estructuras
WHILE 
y
DO WHILE*/ 