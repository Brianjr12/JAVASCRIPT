/* Reto #1 - Número mayor y menor

Escribe un programa que pida al usuario 2 números, mostrando como salida cuál es el número mayor y la diferencia de uno respecto al otro. En caso de que los números sean iguales, mostrarlo también en pantalla. */

let firstNum = parseInt(prompt("ingrese su primer numero"));

let secondNum = parseInt(prompt("ingrese su segundo numero"));

document.write(numeroMayorMenor(firstNum, secondNum))

// alert(numeroMayorMenor(firstNum, secondNum))


function numeroMayorMenor(firstNum, secondNum) {
	if (firstNum > secondNum) {
		return `${firstNum} es mayor que ${secondNum}. Y la diferencia entre ${firstNum} y ${secondNum} es: ${firstNum - secondNum}`;
	}
	else if (secondNum > firstNum) {
		return `${secondNum} es mayor que ${firstNum}. Y la diferencia entre ${secondNum} y ${firstNum} es: ${secondNum - firstNum}`;
	}
	else {
		return `${firstNum} y ${secondNum} son números iguales`;
	}
}
// console.log(numeroMayorMenor());

