// *Dado un array de números, escribe una función que calcule la suma de todos los números impares del array.

function sumImp(array) {
  let sum = 0;
  array.forEach((numbers) => {
    numbers % 2 !== 0 ? (sum += numbers) : "";
  });
  console.log(sum);
}

sumImp([1, 22, 36, 3, 15, 44, 13]);
