/*
Condicionales
 */

/*

let unidades = 0;
let total = 0;
unidades = +prompt("Cuantos productos desea comprar?");

if(unidades >= 1000){
 console.log(`Precio x producto: 0.85 centavos`);
 total = unidades * 0.90;;

} else{
 console.log(`Precio x producto: 0.90 centavos`);
 total = unidades * 0.90;
}

console.log (`Total a pagar ${total}`);
document.write(`Totala a pagar ${total} `);

*/

/*

let traje = 0;
let total = 0;
unidades = +prompt("Cuantos productos desea comprar?");

if(unidades >= 2500){
 console.log(`Descuento 15 porciento`);
 total = (traje* 0.15) - traje;

} else{
 console.log(`Descuento 18 porciento`);
 total = (traje* 0.18) - traje;
}

console.log (`Total a pagar ${total}`);
document.write(`Totala a pagar ${total} `);

*/



/**
 * Ejercicio 3.5 pag. 58
 */

/*
let n1 = 32;
let n2 = 5;
let n3 = 100;
let mayor = 0;

if(n1 > n2) {
    if(n1 > n3) {
        mayor = n1;
    } else {
        mayor = n3;
    }
} else {
    if (n2 > n3){
        mayor = n2;
    }
    else {
        mayor = n3;
    }
}

document.write(`El mayor es: ${mayor}`);

*/


/*
ESPACIO TEORICO
Tipos de Comparadores:
Comparadores ARITMETICOS
a > b (si a es mayor que b)
a < b (si a es menor que b)
a <= b (si a es menor igual que b)
a >= b (si a es mayor o igual que b)
a === b (si a es igual que b en valor y tipo de dato)
a == b (si a es igual que b en valor)
a !==b (si a es diferente de b)
a !=== b

COMPARADORES LOGICOS

a && b (si a y b son verdaderos)
a || b ( si y/o b son verdaderos)
!a (La negacion de a)

*/ 


/*
    Ejercicio 3.5 pag 58 version con Operadores Logicos
 */

/*

let n1 = 90, n2  = 33, n3 = 42, mayor = 0;


if (n1 > n2 && n1 > n3) {
    mayor = n1;
} else{
    if(n2 > n3 && n2 > n1) {
        mayor = n2;
    }
    else{
        mayor = n3;
    }
}

document.write(`El mayor de: ${n1} ${n2} y ${n3} es: ${mayor}`);

*/ 

/*
let precio = 1000.00;
let dia = "miercoles";

if (dia === "lunes" || dia === "martes"){
    precio = precio * 0.85;
}

document.write(`Total a pagar: ${precio}`);
*/

/*Ejecicio 3.6 Pg 61*/ 

/*
let platos = 400;
let total = 0;

if (platos < 200 ){
    total = platos*95;
}else{
    if(platos <= 300){
        total = platos*85;
    }
    else{
        total = platos*75;
    }
}

document.write(`Cantidad de Plato: ${platos} <br> Total a pagar ${total}`);


/*Ejercicio 3.4 Pag. 89*/ 

/*
let horas = 6;
let total = 0;

if(horas <= 2) {
    total = horas * 5;
    else{
    if (horas <= 5){
        total = (2 * 5) + (horas - 2) * 4;
         }
    else{
        if (horas <= 10){
        total = (2*5) +(3*4) +(horas - 5) * 3;
         }
    else {
        total = (2 * 5) + (3*4) + (5*3) + (horas - 10) * 2;
        }
    }
}

document.write(`Horas en el estacionamiento" ${hora} <br> Total a pagar: S/ ${total}`)  */

/*
let bono = 0;
let anos = 4;
let sueldo = 1000;

if (anos > 4 || sueldo < 2000){
    bono = sueldo*0.25
}
else{
    bono = sueldo*0.2
}
*/

