//* Dado un array de números, escribe una función que calcule la suma de todos los números impares del array.

function sumImpares(arrayNumber) {
  let total= 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    let elements = arrayNumber[i]

    elements % 2 == 0 ? "" : total += elements;
  }
  console.log(`la suma total de los números impares es: ${total}`);
}
sumImpares([1, 23, 4, 534, 7, 52, 46, 3]);

