const suma = function (a, b) {
  return a + b;
};

const multiplicar = (a, b) => {
  return a * b;
};

console.log(`5 x 8: ${multiplicar(5, 8)}`);

/*
Las funciones anonimas pueden tener retornos implicitos 
si el desarrollo de la funcion tiene una line de codigo
CONSEJO
cuando queremos representar un retorno implicito,
procurar encerrarlo en simbolo de parentesis
*/

const sumar = (a, b) => a + b;

sumar(4, 5);
//4 5f
//el retorno de la función será a+b

// (subexpr1, subexpr2, ..., subexprn)
// (expr)
// expr

const dividir = (a, b) => a / b;

const flechaConCuerpo = () => {
  return "algo";
};

const obj = {
  prop: "value",
};

const flechaQueDevuelveUnObjeto = () => ({
  a: 10,
});

console.log(`9 / 3 : ${dividir(9, 3)}`);

/* Si una funcion de flecha recibe 1 parametro(exactamente 1)
pueden obviarse los parentesis que encierran a ese parametro
*/

const cuadrado = (n) => n * n;
console.log(`Cuadrado de 9: ${cuadrado(9)}`);

/*
Si una funcion de flehca no recibe parametros, colocar 
la apertura y cierre de parentesis*/

/*Si la funcion de flecha solo tiene una linea de codigo de 
desarrollo, se pueden obviar las llaves*/

const saludar = () => console.log("Saludando!!!");

saludar();
