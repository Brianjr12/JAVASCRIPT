//* Dado los lados de un triángulo, identifique que tipo de triángulo es de acuerdo con la clasificación de sus lados. Si uno de los lados es cero debe enviar el mensaje “No se puede identificar, uno de los lados no tiene valor.”.                                                                      Cree una estructura repetitiva(mientras o hasta que) que permita solicitar la entrada de los lados hasta que el usuario responda que no desea continuar. * /
function triangulos() {
  let continuar = "SI";
  const final =
    "si ingresaste 'no' u otro tipo de caracter se cerrará el programa";
  const error =
    "Uno de los lados no es valor númerico. Por favor ingresa solo números";
  
  while (continuar === "SI") {
    const lado1 = parseFloat(prompt("ingrese el valor del lado 1"));
    const lado2 = parseFloat(prompt("ingrese el valor del lado 2"));
    const lado3 = parseFloat(prompt("ingrese el valor del lado 3"));

    if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3)) {
      if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
        alert("No se puede identificar, uno de los lados no tiene valor");
      } else if (lado1 == lado2 && lado3 == lado2) {
        alert("Es un triangulo equilatero");
      } else if (lado1 == lado2 || lado3 == lado1 || lado3 == lado2) {
        alert("Es un triangulo isosceles");
      } else {
        alert("Es un triangulo escaleno");
      }
    } else {
      alert(error);
    }
    continuar = prompt("Deseas continuar?. Ingresa 'si',").toUpperCase();
    continuar == "SI" ? "" : alert(final);
  }
}
triangulos();
