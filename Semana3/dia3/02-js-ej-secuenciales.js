/**
  * 1. Algoritmo para sumar 4 numeros
    e imprimir el promedio de los 4
 */

    let c1 = 0, c2 = 0, c3 = 0 , c4 = 0, promedio, suma = 0;

    console.log(typeof c1);

    c1 = +prompt ("Ingrese la primera nota");
    c2 = +prompt ("Ingrese la segunda nota");
    c3 = +prompt ("Ingrese la tercera nota");
    c4 = +prompt ("Ingrese la cuarta nota");
 
    //OJO: Aantepone el simbolo "+"  a umnna instruccion o variable la convierte automaticamente en un numero.
    // en este ejemplo adelante del prompt convertimos a un number


    //Como mostrar el tipo de dato de una variable

    console.log(typeof c1);

    console.log(c1);


    suma = c1 + c2 + c3 + c4;
    promedio = suma/4;

    console.log(promedio);

/*El uso de los backticks () nos ayuda a concatenar variables con
strings en un sola linea sin el uso de operado ( + )*/ 

    console.log("El promedio es: " + promedio);
    console.log(`El promedio es: ${promedio}`);


