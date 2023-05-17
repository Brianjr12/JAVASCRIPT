// * 2.	Generación de la tabla de multiplicar (del 1 al 12) del número que indique el usuario. Ejemplo de la tabla de salida dado el número (use 2 ciclos).

let cnt = "si";
let num;
while (cnt == "si") {
  num = parseInt(prompt("ingrese su numero"))
  for (let i = 1; i <= 12; i++) {
    console.log(`El resultado de multiplicar ${num} X ${i} es: ${num * i}`)
  }
  cnt = prompt("Deseas calcular otro número?");
}
