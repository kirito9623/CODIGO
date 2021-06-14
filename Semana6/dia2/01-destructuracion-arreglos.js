/*Destructuracion en arreglos*/

let edades = [12, 52, 32, 16, 85, 45, 15];
//forma de copiar correctamente un arreglo

let nuevasEdades = [...edades];
//obtener una copia de un arreglo y agregarle dos elementos

let nuevasEdadesMasDOS = [...edades, 20, 90];

console.log(edades);
console.log(nuevasEdades);
console.log(nuevasEdadesMasDOS);

//Obtener los dos primeros elementos del arreglo edades
let [n1, n2] = edades;
console.log(n1);
console.log(n2);

//Obtener los dos primero elementos del arreglo edades
// y los demas, en un nuevo arreglo

let[numero1, numero2, ...resto] = edades;

console.log(numero1);
console.log(numero2);
console.log(resto);



//Ejemplo

/*Funcion que recibe el nombre de una ciudad
y retorna en un arreglo de 2 elementos 
la latitud y la longitud de dicha ciudad
@param {*} nombre */ 

const getCoordenadasPorNombreCiudad = (nombre) => {
    let rpta = [-14.5281, -62.165];
    return rpta;
};

const [lat, long] = getCoordenadasPorNombreCiudad('Puno');

console.log(`Latitud: ${lat}`);
console.log(`Longitud: ${long}`);

