
/*
    Ejemplo de metodo estatico
    Cuando un metodo es estatico, se puede invocarlo
    sin necesidad de crear un objeto de la clase
    a la que pertenece
*/ 

class Utils{
    static valordePi(){
        return 3.1415;
    }
}

console.log(Utils.valordePi());

/*
    La Clase Math tiene muchos metodos estaticos en su interior
    que podemos usar sin necesidad de instancia objetos
*/ 

/*Math.srqt(numero)
retorna la raiz cuadrada de un numero */

console.log(`Raiz cuadrada de 81: ${Math.sqrt(81)}`);

/*
Math.round(numero)
Redondear un numero
*/ 

console.log(`Redondeando 4.85: ${Math.round(4.85)}`);

/*
Math.ceil(numero)
Devuelve el techo de un numero decimal
Ejm:
Techo de 3.11 => 4
Techo de 2.001 => 3
*/ 

console.log(`Techo de 4.01: ${Math.ceil(4.01)}`);


/*
Math.floor (numero)
Devuelve el piso de un numero decimal
Ejm:
Techo de 3.11 => 4
Techo de 2.001 => 3
*/ 

console.log(`Piso de 8.99: ${Math.floor(8.99)}`);

/*
Obtener un numero aleatorio entre dos numeros dados
Math.random()
*/ 

//a continuacion, un artificio para calcular un random
//entre dos numero max y min

let aleatorio = Math.random() * (100 - 50) + 50;
console.log(aleatorio);

//Propiedad de los Numbers para redondear o aplicar 
//decimales a un numero determinado

//number.tofixed(cantidad de decimales);

console.log(aleatorio.toFixed(2));