/*Ejercicio 3.1*/

/*

let n = 0;
n = +prompt("Ingrese su edad");

if( n <= 18 ) {
    console.log("No puede Votar");
}  else {
    console.log("Puede Votar");
}

*/


/*Ejercicio 3.2*/

function calcularSueldo(horas, pagoHora) {
    if (horas <= 40) {
        return pagoHora * horas;
    }
    return 40 * pagoHora + 2 * (horas - 40);
}

console.log(`El sueldo es ${calcularSueldo(50,10)}`);



/*Ejercicio 3.3*/

function comprarRegalo(costo) {
    if (costo <= 10) {
        return "Tarjeta";
    } else if (costo <= 100) {
        return "Chocolate";
    } else if (costo <= 250) {
        return "Flores";
    } else {
        return "Anillos";
    }
}

console.log(`El regalo es ${comprarRegalo(5)}`);
console.log(`El regalo es ${comprarRegalo(15)}`);
console.log(`El regalo es ${comprarRegalo(105)}`);
console.log(`El regalo es ${comprarRegalo(205)}`);
console.log(`El regalo es ${comprarRegalo(253)}`);


/*Ejercicio 3.4*/

function cobroEstacionar(horas) {
    if (horas <= 2) {
        return horas * 5;
    } else if (horas <= 5) {
        return 2 * 5 + (horas - 2) * 4;
    } else if (horas <= 10) {
        return 2 * 5 + 3 * 4 + (horas - 5) * 3;
    } else {
        return 2 * 5 + 3 * 4 + 5 * 3 + (horas - 10) * 2;
    }
}
console.log(`Po estacionar se debe pagar ${cobroEstacionar(2)}`);
console.log(`Po estacionar se debe pagar ${cobroEstacionar(5)}`);
console.log(`Po estacionar se debe pagar ${cobroEstacionar(10)}`);
console.log(`Po estacionar se debe pagar ${cobroEstacionar(15)}`);



/*Ejercicio 3.5*/

function menorEdad(edad, nombre, edad2, nombre2, edad3, nombre3) {
    if (edad > edad2 && edad > edad3) {
        return `El mayor es el ${nombre}`;
    } else {
        if (edad2 > edad && edad2 > edad3) {
            return `El mayor es el ${nombre2}`;
        } else {
            return `El mayor es el ${nombre3}`;
        }
    }
}
console.log(menorEdad(20, "Juan", 30, "Pedro", 35, "lucas"));



/*Ejercicio 3.6*/

function cobroArticulo(precio) {
    if (200 <= precio) {
        return precio * 0.85;
    } else if (100 <= precio && precio <= 200) {
        return precio * 0.88;
    } else if (precio <= 100) {
        return precio * 0.90;
    }
}

console.log(`El costo con descuento es ${cobroArticulo(150)}`);


/*Ejercicio 3.7*/

function asignarBeca(promedio, edad) {

    if (18 <= edad) {

        if (9 <= promedio) {
            return 2000;
        } else if (6 <= promedio && promedio <= 7.5) {
            return 500;
        } else {
            return `No tienes Beca,  sigue estudiando el proximo año`;
        }

    } else {
        if (9 <= promedio) {
            return 3000;
        } else if (8 <= promedio && promedio < 9) {
            return 2000;
        } else if (6 <= promedio && promedio < 8) {
            return 100;
        } else {
            return `No tienes Beca,  sigue estudiando el proximo año`;
        }
    }
}
console.log(`BECA: ${asignarBeca(9, 18)}`);
console.log(`BECA: ${asignarBeca(7, 18)}`);
console.log(`BECA: ${asignarBeca(5, 18)}`);
console.log(`BECA: ${asignarBeca(9, 15)}`);
console.log(`BECA: ${asignarBeca(8.5, 15)}`);
console.log(`BECA: ${asignarBeca(7, 15)}`);
console.log(`BECA: ${asignarBeca(3, 15)}`);



/*Ejercicio 3.8*/

function asignarBono(tiempo, sueldo) {
    if (tiempo != 0) {
        if (2 < tiempo && tiempo < 5) {
            return 0.80 * sueldo;
        } else if (tiempo >= 5) {
            return 0.75 * sueldo;
        }
    } else {
        if (sueldo < 1000) {
            return 0.75 * sueldo;
        } else if (1000 < sueldo && sueldo <= 3500) {
            return sueldo * 0.85;
        } else if (3500 < sueldo) {
            return sueldo * 0.90;
        }
    }
}
console.log(`BONO: ${asignarBono(3, 2000)}`);
console.log(`BONO: ${asignarBono(6, 2000)}`);
console.log(`BONO: ${asignarBono(0, 900)}`);
console.log(`BONO: ${asignarBono(0, 2000)}`);
console.log(`BONO: ${asignarBono(0, 3600)}`);


/*Ejercicio 3.9*/

function costoPoliza(plan, conduce, bebe, lentes, enfermedad, edad) {
    if (plan === A) {
        if (bebe = si) {
            return 950 + 950 * 0.1;
        } else if (bebe = si && lentes = si) {
            return 0.75 * sueldo;

        } else {
            return 950;
        }


    } else {
        if (sueldo < 1000) {
            return 0.75 * sueldo;
        } else if (1000 < sueldo && sueldo <= 3500) {
            return sueldo * 0.85;
        } else if (3500 < sueldo) {
            return sueldo * 0.90;
        }
    }
}