/* Reto #3 - Rangos cambiantes.

Nuevamente pide a tu usuario que indique 3 números: un límite superior, un límite inferior y uno de comparación. Si el número de comparación se encuentra entre los 2 primeros, comunicarlo en pantalla. En caso estar por debajo del límite inferior o por arriba del límite superior, también mostrarlo en pantalla. */

let numUl = parseFloat(prompt("Ingrese un número como límite superior"));
let numLi = parseFloat(prompt("Ingrese un número como límite inferior"));
let numCop = parseFloat(prompt("Ingrese un número como comparación"));

document.write(rangosCambiantes(numUl, numLi, numCop));

function rangosCambiantes(numUl, numLi, numCop) {
	if (numCop <= numUl && numCop >= numLi) {
		return `El número ${numCop} se encuentra entre los dos primeros números`;
	} else {
		return `El número ${numCop} no se encuentra entre los dos primeros números`;
	}
}