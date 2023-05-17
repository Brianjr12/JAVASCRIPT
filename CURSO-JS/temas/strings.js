//* cadenas de caracteres
var nombre = "Brian";
var apellido = "Ojeda";

// *Escapar comillas
var miCadena = "Soy una cadena de caracteres con 'comillas'"
console.log(miCadena);

/* : \n salto de linea
    \\ barra invertida
*/
console.log(" Estoy aprendiendo: \n JavaScript");
console.log("Aprendiendo \\ JavaScript");

//* concatenar cadenas de caracteres
var nombreCompleto = "Brian " + "Ojeda";
console.log(nombreCompleto);

//* construir cadenas con variables
var verbo = "programar";
var mensaje = "estoy aprendiendo a " + verbo;
console.log(mensaje);

var mensajeCompleto = "Estoy aprendiendo a progarmar";
var parteFinal = "con freeCodeCamp";
mensajeCompleto += parteFinal;
console.log(mensajeCompleto);

//* longitud de cadenas
var miCadenas = "JavaScript";
console.log(miCadenas.length);

//* Notación de corchetes: primer carácter es 0
var lenguajeDeProgramacion = "JavaScript";
console.log(lenguajeDeProgramacion[0]);

//* Inmutabilidad de cadenas de caracteres
var cadena = "jola mundo";
console.log(cadena);
// cadena[0] = "h"; : error
cadena = "hola mundo";
console.log(cadena);

//* Notación de corchetes: ultimo carácter es -1
console.log(lenguajeDeProgramacion[lenguajeDeProgramacion.length - 1]);

// ! practica
var miAdjetivo = "blanco ";
var miSustantivo = "perro ";
var miAdverbio = "fuertemente";
var miVerbo = "ladra ";

var palabrasEnBlanco = "mi " + miSustantivo + miAdjetivo + miVerbo + miAdverbio;
console.log(palabrasEnBlanco);

// ! practica 2
miAdjetivo = "pequeña";
miSustantivo = "bicicleta";
miVerbo = "voló";
miAdverbio = "lentamente";

palabrasEnBlanco = "la " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + "a tienda " + miAdverbio;
console.log(palabrasEnBlanco);