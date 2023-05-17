// * solo funciona si la condicion es verdadera y solo se ejecuta la primera clausula que sea verdadera

var x = 5;

if (x > 2 && x < 10) {
	console.log("la condicion es verdadera");
}

var estacion = "invierno";

if (estacion == "invierno") {
	console.log("sí, es invierno");
}

// * clausula else

var y = 5;

if (y < 2) {
	console.log("la condicion es verdadera");
} else {
	console.log("la condicion es falsa");
}

var dia = "jueves";

if (dia == "martes") {
	console.log("hoy es jueves");
} else {
	console.log("hoy no es jueves");
}

// * clausula else if

function clasificarValor(valor) {
	if (valor % 2 == 0) {
		console.log("divisible entre 2");
	} else if (valor % 3 == 0) {
		console.log("divisible entre 3");
	} else {
		console.log("no es divisible entre las opciones");
	}
}
clasificarValor(10);
clasificarValor(15);
clasificarValor(7);

// * condicional orden logico

function clasificarValores(valores) {
	if (valores < 5 ) {
		console.log("menor que 5");
	} else if (valores < 10) {
		console.log("menor que 10");
	} else {
		console.log("mayor o igual que 10");
	}
}
clasificarValores(2);

// * encadenar sentencias if else

function interpretarIMC(indiceMasaCorporal) {
	if (indiceMasaCorporal < 18.5) {
		console.log("bajo peso");
	} else if (indiceMasaCorporal <= 24.9) {
		console.log("normal");
	} else if (indiceMasaCorporal <= 29.9) {
		console.log("sobrepeso");
	} else {
		console.log("obeso");
	}
}
interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);

// ! Practica codigo de golf

/*En el juego de Golf, cada agujero tiene un par, que significa, el número promedio de strokes que se espera que haga un golfista para hundir la pelota en el agujero para completar el juego.Dependiendo de qué tan por encima o por debajo del par estén tus strokes, hay un nombre diferente.

Tu función recibirá los argumentos par y strokes.Devuelve la cadena correcta según esta tabla que muestra los golpes en orden de prioridad; superior(más alto) a inferior(más bajo): */

/*
Strokes (golpes)	Devuelve
1									"Hole-in-one!"
<= par - 2				"Eagle"
par - 1						"Birdie"
par								"Par"
par + 1						"Bogey"
par + 2						"Double Bogey"
>= par + 3				"Go Home!"
*/


function juegoGolf(par, strokes) {
	if (strokes == 1) {
		return "Hole-in-one";

	} else if (strokes <= par - 2) {
		return "Eagle";

	} else if (strokes == par - 1) {
		return "Birdie";

	} else if (strokes == par) {
		return "Par";

	} else if (strokes == par + 1) {
		return "Bogey";

	} else if (strokes == par + 2) {
		return "Double Bogey";

	} else if (strokes >= par + 3) {
		return "Go Home";
	}
}
console.log(juegoGolf(4, 4));
