
/*
    break => interrumpir todas las iteraciones que quedan por
    darse en una estructura repetitiva
*/ 

let numeros = [3, 545, 3, -5 , 80   ]

for (let i = 0; i < array.length; i++) {
   if(numeros[i] >= 0) {
       console.log(numeros[i]);
   } else{
       break;
   }
    
}


/*Ejercicio: si un numero es impar imprimirlo, 
y en caso contrario saltar a la siguiente iteracion*/ 

for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] % 2 === 0){
       continue;
   }
    console.log(numeros[i]);
}