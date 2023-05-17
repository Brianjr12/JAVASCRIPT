function generarFraccionAleatoria() {
    return Math.random(); // [0,1)
}

console.log(generarFraccionAleatoria());

var numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// * Números enteros aleatorios

var numAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log(numAleatorioEntre0y19);
console.log("        ");
function generarEnteroAleatorio(limiteSuperior) {
    return Math.floor(Math.random() * limiteSuperior)
}

for (let i = 0; i < 10; i++) {
    console.log(generarEnteroAleatorio(8));
}
console.log("       ");
// * Números enteros aleatorios en un rango
function rangoAleatorio(limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}
for (let i = 0; i < 10; i++) {
    console.log(rangoAleatorio(3, 8));
}
console.log("       ");
// * funcion parseInt()
console.log(parseInt("5"));
console.log(parseInt("6.7"));

var a = parseInt("5");
var b = parseInt("7");
console.log(a + b);

// * funcion parseInt() con una base
console.log(parseInt("110111", 2));
console.log(parseInt("3E0A", 16));

// * operador condicional (ternario)
function retornarMinimo(x, y) {
    return x < y ? x : y;
}
console.log(retornarMinimo(8, 2));

var c = 5;
var e = 9;
console.log(c > e ? c + 2 : e * 3);

// * multiples operadores condicionales
function compararNumeros(numA, numB) {
    return numA == numB ? `${numA} y ${numB} son iguales`
        : numA > numB ? `${numA} es mayor que ${numB}`
            : `${numB} es mayor que ${numA}`;
}
console.log(compararNumeros(121, 212));
console.log(compararNumeros(12, 12));
console.log(compararNumeros(121, 12));
