/*A continuacion una serie de propiedades de la clase
STRING (cadenas de texto)*/ 

let frase = 'Los programadores crean lo que las personas sueñan';


/*
   cadena.length => retorna la cantidad de caracteres 
   que tiene un string 
*/ 

console.log(`Cantidad de caracteres: ${frase.length}`);


/*

*cadena.toUpperCase()=> retorna la misma frase en mayusculas
OJO: retorna, no TRANSFORMA, es decir no cambia el estado original 
de la variable
*/ 
console.log(`${frase.toUpperCase()}`);

/*
*cadena.toLowerCase()=> retorna la misma frase en mayusculas
OJO: retorna, no TRANSFORMA, es decir no cambia el estado original 
de la variable
*/ 
console.log(`${frase.toLowerCase()}`);

/*
cadena.split("criterio_de_separacion"),
Retorna un arreglo de strings dado un separador 
*/ 

let resultadoSplit = frase.split(' ');
console.log(resultadoSplit);


/*
cadena.indexOf("termino_a_buscar")
Retorna la posicion en la que inicia el termino buscado dentro
de la cadena de texto
*/ 

/*Obteniendo la posicion de la palabra crean*/ 

console.log(frase.indexOf('crean'));

/*
Cuando la palabra o el termino buscado no existe, el retorno es -1
*/ 

console.log(frase.indexOf('asd'));


/*
    cadena.trim()
    retorna la misma cadena de texto sin los epascios de los extremos
    OJO los espacion en blanco internos, no cuentan, solo externos
*/ 


let email = 'rgc00023@gmail.com';
let password = '    123456';

console.log(password.trim());


/*
cadena.replace(termino_a_reemplazar,termino_de_reemplazo)
Reemplaza con el "termino_de_remplazo" en cada lugar donde
se encuentre el "termino_a_reemplazr"
*/ 

let resultadoReplace = frase.replace('ñ', 'ni');
console.log(resultadoReplace);

let resultadoReplace2 = frase.replace(/\s/g, '');
console.log(resultadoReplace2);


/*
    cadena.substr(posicion_inicial, cantidad_de_caracteres)
    Retorna una subcadena de la cadena inicial que iniicial
    en la "posicion_incial" y partir de este punto, contamos
    "cantidad_de_caracteres"
*/

let subcadena =  frase.substr(8, 10);
console.log(subcadena);

