

/*Funciones
Porciones de Codigo Disponibles
para ejecutarlas en cualquier momento*/ 

/*
function tabladeMultiplicar(n,limite=10){
    console.log(`****** TABLA DEL ${n}`);
for(let i = 0; i < limite; i++) {
    console.log(`${n} x ${i} = ${i * n}` );
} }

tabladeMultiplicar(5, 12);
tabladeMultiplicar(6, 10);
tabladeMultiplicar(7, 8);
tabladeMultiplicar(8, 14);

*/

function factorial(n){
    let total = 1;
    for (let i = n; i > 0; i--) {
        total = total * i;
    }    
    console.log(`TOTAL EN FUNCION: ${total}`)
    return total;
}

let fact5 = factorial(5);

console.log(`El factorial de 5 es: ${fact5}`)



function sumar(a,b) {
    return a + b;
}

let suma7y8 = sumar(7, 8);

console.log(`Sumando 7 y 8: ${suma7y8}`);


//sin usar el simbolo "+"
// sumar 4 numeros, solo usando la funcion sumar

let suma7y6y5y3 = sumar(sumar(7,6), sumar(5,3));

console.log(`Sumando 7 y 6 y 5 y 3: ${suma7y6y5y3}`);



/*Cuando el return se ejecuta se termina la funcion*/ 

function validarPasswords(ps1, ps2) {
    if(ps1 === ps2 && ps1.length >= 6){
        return true;
        
    }
        console.log("A continuacion se retorna false");
        return false;
}

let resultado = validarPasswords("abc";"abc");
console.log(resultado);

