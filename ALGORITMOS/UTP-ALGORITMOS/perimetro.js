// * 1.	Presente el cálculo del perímetro y área de un cuadrado del número que indique el usuario (1 ciclo)

let area;
let perimetro;
let lados;
let ctn = "si"
while (ctn == "si") {
  lados = parseFloat(prompt("Ingrese el valor de un lado del cuadrado"));
  perimetro = lados * 4
  area = lados**2
  alert(`el perímetro del cuadrado es: ${perimetro} y su área es: ${area}`);
  ctn = prompt("ingrese 'si' para calcular el área y perímetro de otro cuadrado");
}