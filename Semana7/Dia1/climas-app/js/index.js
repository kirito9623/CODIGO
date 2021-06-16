import { getClimaByCiudad } from './servicios.js';
import { gebid } from './utils.js';

const URL_ICONS = 'http://openweathermap.org/img/wn/';

const formBusqueda = gebid('formBusqueda');
const inputBusqueda = gebid('inputBusqueda');
const cardsContainer = gebid('cards__container');

const llenarCards = (climas) => {
	let cardsString = '';
	climas.forEach((clima) => {
		cardsString += `<div class="card">
                      <div class="card-body d-flex">
                        <figure>
                          <img src="${URL_ICONS}${clima.weather[0].icon}@4x.png" alt="" />
                        </figure>
                        <div class="card__info text-center w-100">
                          <h3 class="display-4">${clima.main.temp} °C</h3>
                          <p class="card-text text-muted">
                            14-Junio-2021 - 21:00:00
                          </p>
                        </div>
                      </div>
                    </div>`;
	});
	cardsContainer.innerHTML = cardsString;
	console.log(climas);
};

formBusqueda.onsubmit = (e) => {
	e.preventDefault();
	getClimaByCiudad(inputBusqueda.value).then((rpta) => {
		if (+rpta.cod === 200) {
			llenarCards(rpta.list);
		} else {
			// lanzar mensaje de errorsh
		}
	});
};
