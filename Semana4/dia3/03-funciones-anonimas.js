/**
 * FUNCIONES ANONIMAS y CALLBACKS
 */



function buscarPorDNI(dni, parametro2) {
  /**
   * conexion a la BD usando el dni
   */
  parametro2("Jorge");

}


buscarPorDNI("78451245", function (nombre) {
  console.log(`Encontrado ${nombre}`);
})






/*proceso asincrono que no va en el mismo hilo del Programacion



Este es un callback, invoca una funcion que se le pasa com parametro

function buscarPorDni(dni, parametro2){ 
    setTimeout(function ("Jorge"){
        parametro2(); 3000) }
}

buscarPorDni("7626571", function (nombre){
    console.log("Hola soy una funcion anonima")
})








/*  

function miFuncion(){
    console.log("Soy miFuncion");
}

function buscarPorDNI(dni, parametro2){
    parametro2();
}

buscarPorDNI("78451245", miFuncion)






*/ 








/********************************** */

let saludar = function () {
  console.log("Estoy saludando");
}

saludar();



let numero = 65;
getNombres(numero);





/**
 * Funcion que entrega los usuarios del sistema
 * @param {Function} callback 
 * Funcion que recibe un callback al cual envía
 * un arreglo con la lista de usuarios
 */
const getNombres = (callback) => {
  fetch("https://reqres.in/api/users")
  .then((peticion) => {
    return peticion.json();
  })
  .then(data => {
    let nombres = data.data.map(obj => obj.first_name);
    callback(nombres);
  })
};

getNombres((usuarios) => {
  console.log(usuarios);
});

const getNombres2 = () =>  
  fetch("https://reqres.in/api/users")
  .then(peticion => peticion.json())
  .then(data => data.data.map(obj => obj.first_name))

getNombres2().then((usuarios) => {
  console.log(usuarios);
});

function suma(a,b){
  a+b
}

const sumaFlecha = (a,b) => a + b

const getNombres3 = async () => {
  const response = await fetch("https://reqres.in/api/users")
  const json = await response.json()
  return json.data.map(obj => obj.first_name)
}

const usuarios = await getNombres3()
console.log(usuarios)
  
// asynchronous function declaration statement
async function getNombres4(){
  const response = await fetch("https://reqres.in/api/users")
  const json = await response.json()
  return json.data.map(obj => obj.first_name)
}

// this existe aqui

// Funciones anónimas
// Es una función que no tiene nombre
// Como no tiene nombre necesita algo que la referencie
// Esta no tiene el `this` vinculado(binded)
const myFunc = function () {
}

// Arrow Function
// Esta tiene el `this` vinculado al contexto actual
const myFuncArrow = () => {
}

class A {
  myMétodo(a, b){
    // this existe aqui
    //el `this` que esté acá

    const myFuncBinded = () => {
      // this existe aqui
      // Será el `this` de esta zona
    }

    // Sin embargo el `this` de este método
    // depende completamente de como fue
    // llamado el método
  }
}

const laInstancia = A()

// si yo llamo así
laInstancia.myMétodo()
// El `this` dentro de my método será `laInstancia`

// si almaceno la referencia del método en una variable
const someVar = laInstancia.myMétodo
// entonces llamar así:
someVar()
// El `this` dentro de someVar será el this del contexto actual
// es decir el `this` será el objeto global
// si el código se ejecuta en modo stricto
// el `this` en la llamada de esta función será `undefined`

// yo puedo vincular una función no vinculada usando `#bind()`
const bindedFn = someVar.bind(laInstancia)
// Al ejecutar la función `bindedFn` su `this`
// será siempre `la instancia` no importa la forma cómo se lo llame
bindedFn()

// promesas se implementan en userland


const myArr = [1,2,3]

// high order function
  // una función que recibe una función ó 
  // una función que retorna una función ó
  // ambas cosas a la vez

myArr.map(n=>n**2) // [1,2,3] -> n**2 -> [1, 4, 9]
myArr.map((n)=>{ return n**2 })
myArr.map(function(n){ return n**2 })
myArr.map(function elevarAlCuadrado(n){ return n**2 })

// function es hoisted, hoisted => que existe de forma global y no importa el orden en que fue declarado
function elevarAlCuadrado(n){
  return n**2
}

myArra.map(eleverAlCuadrado)

function alCuadrado(arr){
  const result = []
  for(let n of arr){
    result.push(n**2)
  }
  return result
}

alCuadrado([1,2,3]) // [1,4,9]

