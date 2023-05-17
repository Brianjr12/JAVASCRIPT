// ! el bucle for actualiza la variable automaticamente

var miArreglo = [];

for (let i = 0; i < 10; i += 2) {
    miArreglo.push(i);
    miArreglo.push("A");

}

console.log(miArreglo);

// * bucles for: números impares

let miArreglo1 = [];

for (let i = 1; i < 20; i += 2) {
    miArreglo1.push(i);
}

console.log(miArreglo1);

// * reto agrega los números pares entre 2 y 26 a un arreglo

let array = [];

for (let i = 2; i <= 26; i += 2) {
    array.push(i)
}

console.log(array);

// * contar hacia atras

for (let i = 15; i >= 10; i--) {
    console.log(i);
}

let myArray = [];

for (let i = 10; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);

// * iterar sobre un arreglo con un bucle for

// ! iterar significa obtener los elementos del arreglo y utilizarlos en el cuerpo del bucle

let array1 = [4, 6, 8, 2];

let total = 0;

for (let i = 0; i < array1.length; i++) {
    // * utilizar console.log dentro de los bucles para vdr como funciona y entender mejor
    total += array1[i];
}

console.log(total);

let lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (let i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}


// * bucle for dentro de una función

function contarNumerosPares(arreglo) {
    let total = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}
console.log(contarNumerosPares([5, 3, 1]));
console.log(contarNumerosPares([5, 2, 1, 6, 4, 8, 3, 10]));

// * bucles For anidados

let myArray1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < myArray1.length; i++) {
    console.log("> Nueva iteración");
    let arregloAnidado = myArray1[i]; // Arreglo
    console.log(`Arreglo: ${arregloAnidado}`);

    for (let j = 0; j < arregloAnidado.length; j++) {
        console.log(">>> bucle aninado");

        console.log(`Elemento: ${arregloAnidado[j]}`);

        console.log(arregloAnidado[j]); //Elemento
    }
}