/*La palabra reservada this hace referencia al objeto en el que se la invoca*/

let objPersona = {
  nombre: "Roberto",
  apellido: "Gonzalez",
  mostrarDatos: function () {
    console.log(`${this.nombre} ${this.apellido}`);
  },
};

objPersona.mostrarDatos();

/*Creacion de clases de forma tradicional en JS*/
/*realmente en js no existen clases*/

function Persona() {
  /**
   * this = Object.create({})
   * this.constructor = Persona
   */
  this.nombre = "Roberto";
  this.edad = 29;
  this.apellido = "Gonzalez";
  // para usar el operador THIS, no se deben usar funciones
  // de flecha
  this.imprimirInfo = function () {
    console.log(`${this.nombre} ${this.apellido} con ${this.edad} años`);
  };

  /*
    return this
    */
}

Persona.prototype.metodo = function () {};

/*con el operador new y la funcion nos retorna un nuevo objeto*/

let objPersona1 = new Persona();

objPersona1.imprimirInfo();
objPersona1.edad = 30;
objPersona1.imprimirInfo();

const objPersona2 = new Persona();
const objPersona3 = new Persona();
const objPersona4 = new Persona();

objPersona2.imprimirInfo === objPersona3.imprimirInfo; //??? es false
