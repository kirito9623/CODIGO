/**
 * OBJETOS EN JAVASCRIPT
 */
/*
let cpu = {
  ram: 16,
  nucleos: 8,
  discoSolido: "1Tb",
  enfriamientoLiquido: false,
};
console.log(cpu);
// modificando una propiedad del objeto
cpu.ram = 8;
console.log(cpu);
//////////////////////////////////////

let plato = {
  nombre: "Asado de tira",
  precio: 39.0,
  ingredientes: ["carne de res", "papas", "legumbres"],
};

/*¿Cómo agregar un ingrediente al objeto plato? */
/*
plato.ingredientes.push("chorizo");
plato.ingredientes[0] = "carnes de res corte asado de tira";

console.log(plato);

//////////////////////////////////////

let objTrabajador = {
  datosPersonales: {
    nombre: "Jorge",
    apellido: "Garnica",
    edad: 29,
  },
  cargo: "software developer",
  sueldo: 950.0,
};
// ¿Cómo agregar un atributo a un objeto?
/*objTrabajador.datosPersonales.telefono = "912358741";

console.log(objTrabajador);
*/
/////////////////////////////////////

/*una funcion en un objeto se llama metodo y se puede escribir de esta manera imprimirIngredientes() {*/

let ajiGallina = {
  imprimirIngredientes() {
    console.log("Imprimiendo ingredientes");
    for (let ingrediente of this.ingredientes) {
      console.log(
        `${ingrediente.cantidad} ${ingrediente.unidadMedida} de ${ingrediente.nombre}`
      );
    }
  },
  agregarIngrediente(unidadMedida, cantidad, nombre) {
    let ingrediente = {
      nombre,
      unidadMedida,
      cantidad,
    }; /*si es el mismo valor del parametro no colocar dos veces*/
    this.ingredientes.push(ingrediente);
  },
  nombre: "Ají de gallina",
  precio: 12.0,
  ingredientes: [
    {
      nombre: "Gallina",
      unidadMedida: "pechuga",
      cantidad: 1,
    },
    {
      nombre: "Ají amarillo",
      unidadMedida: "gramos",
      cantidad: 200,
    },
  ],
};

ajiGallina.imprimirIngredientes();
ajiGallina.agregarIngrediente("unidades", 7, "aceituna");
ajiGallina.agregarIngrediente("unidades", 5, "huevos");
ajiGallina.imprimirIngredientes();

console.log(ajiGallina);
