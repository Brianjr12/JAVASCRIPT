const btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calculadora);

function calculadora(event) {
  event.preventDefault();

  // Obtener los elementos del DOM
  const PrimerNumero = document.getElementById("primer-numero");
  const SegundoNumero = document.getElementById("segundo-numero");
  const Operador = document.getElementById("operador").value;
  const Resultado = document.getElementById("resultado");
  const Num1 = parseFloat(PrimerNumero.value);
  const Num2 = parseFloat(SegundoNumero.value);
  const error = "Error, debes ingresar solo números o un operador aritmético";

  // Objeto con las operaciones
  const Operadores = {
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
    // operaciones
    suma(Num1, Num2) {
      Resultado.innerText = `El resultado es: ${Num1 + Num2}`;
    },
    resta(Num1, Num2) {
      Resultado.innerText = `El resultado es: ${Num1 - Num2}`;
    },
    multi(Num1, Num2) {
      Resultado.innerText = `El resultado es: ${Num1 * Num2}`;
    },
    div(Num1, Num2) {
      Resultado.innerText = `El resultado es: ${Num1 / Num2}`;
    },
  };

  // Validar que los números sean válidos y el operador sea válido
  if (isNaN(Num1) || isNaN(Num2) || !Operadores.hasOwnProperty(Operador)) {
    Resultado.className = "resultado-invalido";
    Resultado.innerText = error;
  } else {
    switch (Operador) {
      case "+":
        Operadores.suma(Num1, Num2);
        break;
      case "-":
        Operadores.resta(Num1, Num2);
        break;
      case "*":
        Operadores.multi(Num1, Num2);
        break;
      default:
        Operadores.div(Num1, Num2);
        break;
    }
    Resultado.className = "resultado-valido";
  }
}
