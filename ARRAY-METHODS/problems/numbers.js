// * Dado un array de números, escribe una función que devuelva un nuevo array con los números ordenados de mayor a menor.

function orderNumbers(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers;
}

const numbers = [3, 1, 8, 4, 2, 9, 5];
console.log(orderNumbers(numbers)); // [9, 8, 5, 4, 3, 2, 1]
