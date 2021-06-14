console.log("Hola mundo")

//VARIABLES 

/* 1. Una variable se crea una sola vez */ 

let nombre = "Roberto Jose";
let apellido = "Gonzalez Carranza";

console.log(nombre);

nombre = "Jorge" 

console.log(nombre);


//TIPO DE DATO NUMERICO (number)
/*los numero no van con comillas*/ 
let edad = 25;
let sueldo = 950.20;
sueldo = 980.00;
sueldo = sueldo + 20;

//concatenar
/*string implicito no es almacenado en una variable*/ 

let palabraSueldo = "Sueldo: "

console.log("Sueldo: " + sueldo);

//TIPO DE DATOS BOOLEAN (verdadero o  falso)
let soltero = true;
let papeletas = false;

console.log("Soltero?: " + soltero);


//TIPO DE DATO ARRAY

let meses = ["January", "February", "March", "April"]; 

console.log(meses);

//posicion de arreglos

console.log(meses[2])

/*
Operaciones matematicas son iguales en excel por ejemplo
+,-,*,/  
%  (modulo es una operacion que retorna el residuo
    de una division entera)
*/ 

let modulo = 55 % 6;
console.log("55 % 6 = " + modulo);

//Operaciones simplificadas
let likes = 2

//incrementar automaticamente en una unidad a la variable likes
likes++;
console.log(likes);

//incrementar en una unidad a la variable likes
likes += 1;
console.log(likes);


