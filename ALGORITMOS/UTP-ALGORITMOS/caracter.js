// * 3.	Presentación de un triángulo dibujado con caracteres.  El usuario debe proveer el carácter que desea que se imprima y el número máximo de caracteres que se utilizará como base del triángulo ( 2 ciclos)
// Pedimos al usuario el carácter a utilizar y la base del triángulo
let char = prompt("Ingrese el carácter a utilizar:");
let base = parseInt(prompt("Ingrese el número máximo de caracteres a utilizar como base del triángulo:"));
// Creamos el triángulo utilizando dos ciclos for
for (let i = 1; i <= base; i++) {
  let triangulo = ""; // Creamos una cadena vacía para almacenar la fila actual del triángulo

  // Agregamos el carácter a la fila i veces
  for (let j = 1; j <= i; j++) {
    triangulo += char;
  }

  // Imprimimos la fila actual del triángulo
  console.log(triangulo);
}
