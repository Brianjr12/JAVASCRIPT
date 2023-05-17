/* Reto #2 - En el rango, por favor.

Pide al usuario que indique 2 números: uno que servirá como límite y otro para comparar. Si el segundo número es menor al primero, mostrarás un mensaje diciendo “El número ‘x’ se encuentra en el rango, gracias” y en caso contrario dirá “El número ‘x’ excede el límite permitido”. */

let numL = parseFloat(prompt("ingrese un número como límite"))
let numCop = parseFloat(prompt("ingrese un número para comparar"))

document.write(rango(numL, numCop))

function rango(numL, numCop) {
	if (numCop < numL) {
		return `El número ${numCop} se encuetra en el rango, gracias`;
	} else {
		return `El número ${numL} excede el límite`;
	}
}
