// * Reto #6 - Edad permitida

/*Pide al usuario que ingrese su edad y mostrarás un mensaje correspondiente si esta coincide con las siguientes condiciones:

Más de 30 años: Nunca es tarde para aprender ¿Qué curso tomaremos ?

    Entre 29 y 18 años: Es un momento excelente para impulsar tu carrera.

Menos de 18 años: ¿Sabes hacia dónde dirigir tu futuro ? Seguro puedo ayudarte. */

let age = prompt("Ingresa tu edad");

document.write(edadPermitida(age))

function edadPermitida(age) {

    if (age >= 30) {
        return "Nunca es tarde para aprender ¿Qué curso tomaremos ?";
    } else if (age < 18) {
        return "¿Sabes hacia dónde dirigir tu futuro ? Seguro puedo ayudarte."
    } else {
        return "Es un momento excelente para impulsar tu carrera."
    }
}