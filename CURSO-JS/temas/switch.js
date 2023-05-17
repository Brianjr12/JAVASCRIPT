function clasificarValor(valor) {
	var respuesta;
	switch (valor) {
		case 1:
			respuesta = "alpha";
			break;
		case 2:
			respuesta = "beta";
			break;
		case 3:
			respuesta = "gamma";
			break;
		case 4:
			respuesta = "delta";
			break;
	}
	return respuesta;
}
console.log(clasificarValor(1));


var producto = "hamburguesa";

switch (producto) {
	case "pizza":
		console.log("la pizza basica cuesta $10.55");
		break;
	case "hamburguesa":
		console.log("las hamburguesa cuestan $6.78");
		break;
	case "helado":
		console.log("el helado cuesta $2.8");
		break;
}


// * Sentencias switch: opción predeterminada

function selecionarIdioma(valor) {
	var idioma;
	switch (valor) {
		case 1:
			idioma = "Español";
			break;
		case 2:
			idioma = "Frances";
			break;
		case 3:
			idioma = "Italiano";
			break;
		default:
			idioma = "Ingles";
			break;
	}
	return idioma;
}
console.log(selecionarIdioma(1));
console.log(selecionarIdioma(4));
console.log(selecionarIdioma(2));

// * Sentencias switch: múltiples casos

function clasificarVolumen(valor) {
	var volumen;
	switch (valor) {
		case 1:
			volumen = "bajo"
			break;
		case 2:
		case 3:
			volumen = "intermedio";
			break;
		case 4:
		case 5:
		case 6:
			volumen = "alto";
			break;
		default:
			break;
	}
	return volumen;
}
console.log(clasificarVolumen(6));
console.log(clasificarVolumen(5));

// * reemplazar if..else por switch
function seleIdioma(valor) {
	var idioma;
	switch (valor) {
		case 1:
			idioma = "español";
			break;
		case 2:
			idioma = "frances";
			break;
		case 3:
			idioma = "italiano";
		default:
			idioma = "ingles";
			break;
	}
	return idioma;
}

console.log(seleIdioma(3));

// * retornar valores booleanos

function esMenorQue(a, b) {
	return a < b;
}
console.log(esMenorQue(1, 3));
console.log(esMenorQue(12, 3));

// * Patrón de retorno anticipado
function calcularRaizCuadrada(num) {
	if (num < 0) {
		return undefined;
	}
	return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-25));


// ! JUEGO CONTAR CARTAS

/*
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja en la siguiente mano sobre la casa llevando la cuenta del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama cuenta de tarjetas.

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

Cambios del conteo	Cartas
+1	                2, 3, 4, 5, 6
0	                7, 8, 9
-1	                10, 'J', 'Q', 'K', 'A'

Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.

Resultados de ejemplo: -3 Hold o 5 Bet
*/




var count = 0;
function contarCartas(card) {

	var decision;

	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "j":
		case "q":
		case "k":
		case "a":
			count--;
			break;
	}
	if (count > 0) {
		decision = "Apostar";
	} else {
		decision = "Esperar";
	}

	return count + " " + decision
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("k"));
console.log(contarCartas("a"));


