let imagenes = [
  "https://i.picsum.photos/id/564/200/200.jpg?hmac=uExb18W9rplmCwAJ9SS5NVsLaurpaCTCBuHZdhsW25I",
  "https://i.picsum.photos/id/1052/200/200.jpg?hmac=C8TAQ7jOmsdTxY6LFqx0ft2jNVIX0GxUmo8kCnVHkIE",
  "https://i.picsum.photos/id/596/200/200.jpg?hmac=TiMsstBNF6YKq9Gn7QGsihITEUcv_O8QuTXEVR3T6GA",
  "https://i.picsum.photos/id/1047/200/200.jpg?hmac=kudT4eT6oVe4zhN1SEkQl9MN_AWC771kb2QAUgLjlmc",
  "https://i.picsum.photos/id/399/200/200.jpg?hmac=LCWCFY16G50iBPpqU6-FCw79ovEqvznYsxoQNCIldV8",
  "https://i.picsum.photos/id/134/200/200.jpg?hmac=a3L-JjVSGeG8w3SdNpzxdh8WSC0xHJXgeD6QryCK7pU",
];


let users = [
  {
    id: 1,
    email: "george.bluth@gmail.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    age: 12,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    age: 50,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    age: 35,
  },
  {
    id: 4,
    email: "eve.holt@gmail.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    age: 15,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    age: 17,
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    age: 36,
  },
];

let btnAnterior = document.getElementById("bntAnterior");
let btnSiguiente = document.getElementById("bntSiguiente");
let imagen = document.getElementById("imagen");

/*
    HINT: usar una variable glogal que inice con el valor 0
*/

//let n = 0;

/*Al darle click al boton anterior,
se debera correr una imagen hacia atras del arreglo
de imagenes, si la imagen tiene la posicion 0; el btrnAnterior
no debera responder al click

Al darle click al boton siguiente al comportamiento
analofo al del btnAnterior*/

// Inicialización del estado
/* let n = 0;
btnAnterior.setAttribute("disabled", true);
imagen.setAttribute('src', imagenes[0]);

// Registro de eventos
btnAnterior.onclick = () => {
    n--; //disminuye
    
    if(n <= 0) n=0; //corrige
    
    imagen.setAttribute('src', imagenes[n]);

    if (n === 0) {
        btnAnterior.setAttribute("disabled", true);
    }

    if(n <= imagenes.length - 1){
        btnSiguiente.removeAttribute("disabled");
    }
};




btnSiguiente.onclick = () => {
    n++;

    if(n >= imagenes.length-1){
        n = imagenes.length-1
    }

    imagen.setAttribute('src', imagenes[n]);

    if(n >= 0){
        btnAnterior.removeAttribute("disabled");
    }

    if (n === imagenes.length - 1) {
        btnSiguiente.setAttribute("disabled", true);
    }
}; */

class Slider {
  /**
   * @param {string|HTMLElement} el - Pasar un selector o un elemento HTML
   * @param {Array<string>} imagenes - Lista de urls de imagenes a mostrar
   */
  constructor(el, imagenes) {
    // procesar `el`
    if (typeof el === "string") {
      this.el = document.querySelector(el);
    } else if (el instanceof HTMLElement) {
      this.el = el;
    }

    this.imagenes = imagenes;

    this._i = 0;

    // crear boton y atributos
    this.btnAnterior = document.createElement("button");
    this.btnAnterior.innerText = "Anterior";
    this.btnAnterior.className = "btn-anterior";
    this.btnAnterior.setAttribute("disabled", true);
    
    // crear boton y atributos
    this.btnSiguiente = document.createElement("button");
    this.btnSiguiente.innerText = "Siguiente";
    this.btnSiguiente.className = "btn-siguiente";
    
    // crear imagen
    this.imagenEl = document.createElement("img");
    this.imagenEl.src = this.imagenes[this.i];

    
    this.btnAnterior.addEventListener("click", () => {
      this.i = this.i - 1;
    });
    
    this.btnSiguiente.addEventListener("click", () => {
      this.i = this.i + 1;
    });

    this.el.appendChild(this.btnAnterior);
    this.el.appendChild(this.imagenEl);
    this.el.appendChild(this.btnSiguiente);
  }

  set i(value) {
    this._i = value;

    if (this._i <= 0) {
      this._i = 0;
    }

    if (this._i >= this.imagenes.length - 1) {
      this._i = this.imagenes.length - 1;
    }

    this.iChanged();
  }

  get i() {
    return this._i;
  }

  iChanged() {
    this.imagenEl.src = this.imagenes[this.i];

    if (this.i === 0) {
      this.btnAnterior.setAttribute("disabled", true);
    }

    if (this.i > 0) {
      this.btnAnterior.removeAttribute("disabled");
    }

    if (this.i === this.imagenes.length - 1) {
      this.btnSiguiente.setAttribute("disabled", true);
    }

    if (this.i < this.imagenes.length - 1) {
      this.btnSiguiente.removeAttribute("disabled");
    }
  }
}

new Slider("#slider-1", imagenes);
new Slider("#slider-2", users.map(user => user.avatar));
new Slider("#slider-3", imagenes);


