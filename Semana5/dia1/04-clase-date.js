/*Clase Date
para manejar fechas*/ 

let hoy = new Date();
console.log(hoy);

/*Obtener el año de un objeto Date
date.getFullYea();*/ 

console.log(`Ano actual ${hoy.getFullYear}`);


/*Obtener el mes actual
Enero: 0
Diciembre:11
date.gerMonth();*/

console.log(`Mes actual ${hoy.getMonth() + 1}`);

/*
Obtener la fecha de hoy (el dia del mes)
date.getDate*/

console.log(`Dia del mes: ${hoy.getDate()}`);

/*
Obtener las horas, minutos y segundos
date.getHours()
date.getMinutes()
date.getSeconds()
*/ 

console.log(`Hora actual: ${hoy.getHours()}`);
console.log(`Hora actual: ${hoy.getMinutes()}`);
console.log(`Hora actual: ${hoy.getSeconds()}`);


/*Obtener el dia de la semana
date.getDay();*/

const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
]

console.log(`Dia de la Semana: ${dias[hoy.getDay()]}`);


/*Constructores de fechas*/ 

let diaDelPadre = new Date(2021, 5, 20, 0, 0, 0);
console.log('El dia del padre es:');
console.log(dias[diaDelPadre.getDay()]);
