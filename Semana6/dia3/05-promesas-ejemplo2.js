const URL = 'https://jsonplaceholder.typicode.com/todos';

/*Fetch es una funcion propia del navegador para JAVASCRIPT
tiene un comportamiento similar a la liberia axios*/

fetch(URL)
.then((peticion)=>{
    return peticion.json();
})
.then((data) => {
    console.log(data);
});
