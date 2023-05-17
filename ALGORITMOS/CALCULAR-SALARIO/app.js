// * /* Haga un programa que al ingresar las horas trabajadas y el pago por hora (50 dólares) se calcule el sueldo de una persona, si este supera los 1500 dólares mostrar un mensaje en pantalla indicando que debe pagar impuestos. */

const PagoHora = 50;

const HorasTrabajadas = document.getElementById('horas-trabajadas');

const Calcular = document.getElementById('calcular');

const Resultado = document.getElementById('resultado')

Calcular.addEventListener('click', calcularSalario)


function calcularSalario() {

    const ValorHorasTrabajadas = parseInt(HorasTrabajadas.value);

    let sueldo;

    (sueldo = ValorHorasTrabajadas * PagoHora);

    if (!isNaN(ValorHorasTrabajadas)) {
        if (sueldo < 1500) {
            Resultado.innerText = `su sueldo es de ${sueldo}$ y usted no debe pagar impuesto`;
        } else {
            Resultado.innerText = `su sueldo es de ${sueldo}$ y usted debe pagar impuesto ya que este supera los 1500$`;
        }
    } else {
        alert("Debes ingresar un número");
    }

}


