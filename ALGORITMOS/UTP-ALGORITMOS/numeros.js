//*    Sume los números impares y los números pares que hay del 1 al 5 y presente el total de impares, pares y suma de ambos. Utilice la estructura alternativa según y la estructura la estructura de repetición (repetir/hasta). * /

let i = 1;
let npar = 0;
let nimpar = 0;
let total = 0;
do {
  switch (i) {
    case 1:
    case 3:
    case 5:
      nimpar = nimpar + i
      break;
    default:
      npar += i
      break;
  }
  total = nimpar + npar
  i++

} while (i < 6);

console.log(`la suma de los números pares es: ${npar}`);
console.log(`la suma de los números impares es ${nimpar}`);
console.log(`la suma de los números pares e impares es ${total}`);