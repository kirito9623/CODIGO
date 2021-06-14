/*Ciclo for*/ 


//i no debe ser alterada manualmente


/*Ejercicio leer 4 notas y obtener promedio de ellas*/ 

/*
let suma = 0;


for (let i =0; i < 4; i++){
    suma = suma +  +prompt(`Ingrese la nota: ${i + 1}`);
}

console.log (suma); */

/*Dado dos numero a y b calcular la multiplicacion de ambros sin hacer uso del simbolo **/ 

/*
let a = +prompt("Ingrese el primer numero");
let b = +prompt("Ingrese el segundo numero");
let producto = 0;

for (let i = 0; i < a; i++) {
    producto = producto + b;
}

document.write(`El producto es:  ${producto}`);
*/

/*
let a = 8;
let b =5;
let total =0;

for(let i = 0; i < b; i++){
    total += a;
}

console.log(`${a} x ${b} = ${total}`);

document.write(`${a} x ${b} = ${total}`);*/

/*Ejercicio
Con un ciclo for, simular la tabla de multiplicar
de un numero x
la tabla debe ir del 0 al 12*/ 

/*
let x = 9;

for(let i = 0; i < 13; i++){
    console.log(`${i} x ${x} = ${i * x}`);
}
*/

/*Mejore el ejercicio anterior, para mostrar la tabla de los 
N primeros numeros naturales
Cada numero debe mostrar su tabla del 0 al 12
desde 0 hasta N*/ 

let n =5;

for(let i = 0; i < n; i++){
    console.log(`///////TABLA DEL ${i} //////`);
    for(let c = 0; c < 13; c++){
        console.log(`${i} x ${c} = ${i * c}`);
    }
    console.log(`/////// FIN DE LA TABLA DEL ${i} //////`);
}



/*Recorriendo Arreglos*/ 

let edades = [35,45,35,45,15,78,78,54,65,12,32,45,65,21,32,54,25];

/*arreglo.length => devuelve la cantidad de elementos de un arregglo*/

console.log(`Elementos del arreglo ${edades.length}`);
console.log(`El ultimo elemento de un arreglo: ${edades[edades.length - 1]}`);


for (let i = 0; i < edades.length; i++) {
    console.log(`Apto con edad de: ${edades[i]} anos`);
    
}