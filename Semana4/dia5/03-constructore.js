const Plato = () => {
  let objPlato = {
    nombre: "",
    precio: 0,
    ingredientes: [],
  };
  return objPlato;
};

let ceviche = Plato();
let secoDeCordero = Plato();
ceviche.nombre = "Cebiche";
/*Llenando las caracteristicas de ambos*/
console.log(ceviche);
console.log(secoDeCordero);

// prototype

/*ERROR*/

let vehiculo = {
  marca: "",
  tipo: "",
  color: "",
  anio: 0,
};

let carroJorge = vehiculo;
let carroEmily = vehiculo;

carroJorge.marca = "Mazda";

console.log(carroJorge);
console.log(carroEmily);

// Clase Animal: #caminar() "estoy caminando"
// Clase Animal -> Clase Perro
// Clase Animal -> Clase Gato

/*function Animal() {
  this.tipo = "animal generico";
}

Animal.prototype.caminar = function () {
  return console.log("Estoy caminando");
}; */

class Animal {
  constructor() {
    this.tipo = "animal genérico";
  }

  caminar() {
    console.log("estoy caminando");
  }
}

/* function Perro() {
  Animal.call(this);
  this.tipo = "perro";
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;
Perro.prototype.hablar = function () {
  console.log("guau");
}; */

class Perro extends Animal {
  constructor() {
    super();
    this.tipo = "perro";
  }

  hablar() {
    console.log("guau");
  }
}

/* function Gato() {
  Animal.call(this);
  this.tipo = "gato";
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;
Gato.prototype.hablar = function () {
  console.log("miau");
}; */

class Gato extends Animal {
  constructor() {
    super();
    this.tipo = gato;
  }

  hablar() {
    console.log("miau");
  }
}

const gato = new Gato();
gato.caminar();

const perro = new Perro();
perro.caminar();

gata.hablar();
perro.hablar();
