console.log(window);

/*El objeto windows representa a todo el navegador
    tiene funciones para controlar el DOM,
    imprimir en consola, para mostrar alertas, para calcular
    el tamano del viewport, etc

    OJO muchos metodos y propiedades de window se escriben 
    sin tener que colocar el objeto window como tal.
    POR EJEMPLO:
    Prompt, console, alert, entre otros.
*/

window.console.log('EL MENSAJE');

/*
    window.innerWidth
    devuelve el ancho del viewport
*/ 

console.log(`Ancho de la viewport: ${window.innerWidth}`);


/*Una de las propiedades mas importantes de window,
es el objeto "document"
que sirve para controlar los elementos internos del DOM
-crear etiquetas
-eliminar etiquetas
-cambiar clases
-cambiar estilos
-modificar textos
-capturar valores en los formularios,etc*/ 

