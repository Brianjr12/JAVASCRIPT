// *  Calcule el promedio de las temperaturas ingresadas por un usuario para la cantidad de datos que indique él mismo.  Utilice el ciclo “para” en la resolución del problema-* /

let cant = parseInt(prompt("Ingrese la cantidad de temperaturas que desea calcular"));

let temp = 0;
let temps = 0;
let prom = 0;

for (let i = 1; i <= cant; i++) {
  temp = parseFloat(prompt(`Ingrese la temperatura ${i}`))
  temps += temp;
}
alert(`el promedio de las temperaturas ingresadas es ${temps / cant}`);