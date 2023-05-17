// ! siempre actualizar la variable para que sea falsa y se detenga el bucle

// * se pueden declarar las variables como let

var num = 0;

while (num <= 3) {
    console.log("hola, mundo");
    num++;
}

var miArreglo = [];
var i = 0;

console.log(miArreglo);

while (i < 10) {
    miArreglo.push(i);
    i++;
}

console.log(miArreglo);


var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
    numeros.pop();
}

console.log(numeros);

// ! bucle Do while, hacer mientras

let x = 16;

do  {
    console.log(x);
    x++;
} while (x < 10)

while (x < 10) {
    console.log(x);
    x++;
}