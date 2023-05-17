function motrarMensaje() {
	console.log("hola mundo");
}
motrarMensaje();

// * argumentos
function sumar(num1, num2) { // (num1, num2) estos son los parametros
	var suma = num1 + num2;
	console.log(`el resultado de ${num1} + ${num2} es: ${suma}`);
}
sumar(12, 13); // (12, 13) estos son los argumentos
var x = 5;
var y = 3;
sumar(x, y);

function concatenarTresCadenas(cadena1, cadena2, cadena3) {
	console.log(`${cadena1} ${cadena2} ${cadena3}`);
}
concatenarTresCadenas("estoy", "apremdiendo", "aprogramar")

//! variable ambito global
var miVariableGlobal = 5;
console.log(miVariableGlobal);

function name() {
	console.log(miVariableGlobal);
}
name();

console.log(miVariableGlobal);

// ! variable ambito local solo se pueden usar dentro de la funcion
function miFuncion() {
	var miVariablelocal = 4;
	console.log(miVariablelocal);
}
miFuncion();

// console.log(miVariablelocal); da error

// * variable local vs global
var miNombre = "brian";
function mostrarMiNombre() {
	var miNombre = "ojeda";
	console.log(miNombre);
}
mostrarMiNombre();
console.log(miNombre);

// * retornar un valor
function suma(a, b) {
	return a + b;
}
console.log(suma(5, 3));

// * undifine
function sum(a, b) {
	console.log(a + b);
}
console.log(sum(5, 5));

// * asignar un valor retornado
function sum2(a, b) {
	return a + b;
}
var result = sum2(20, 50);
console.log(result);

function crearCadenaConMeta(lenguajeDeProgramacion) {
	return "Mi meta es aprender " + lenguajeDeProgramacion
}
var resultado = crearCadenaConMeta("JavaScript");

console.log(resultado);


/*  Escribe una función nextInLine que tome un arreglo(arr) y un número(item) como argumentos.

Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.

La función nextInLine debe entonces devolver el elemento que fue removido. */

var arr = [1, 2, 3, 4, 5]

function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();
}
console.log(nextInLine(arr, 12));

console.log("el arreglo quedó ", JSON.stringify(arr));


function saludar(name) {
	let saludo = "hola bienvenido ";
	return saludo + name;
}
console.log(saludar("brian"));

function multi(a,b) {
	let resultados = a * b;
	console.log(`el resultado es ${resultados}` );
}
multi(5, 4);

function rest(a, b) {
	return a - b;
}
console.log(rest(100, 60));
