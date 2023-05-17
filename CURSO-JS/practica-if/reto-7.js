// * Reto #7 - Mensajes opcionales
/*Crearás un un script para el que el usuario indicará un número entre 1 y 6. Como respuesta se le brindará un mensaje según el número leido:

1 - “Hoy aprenderemos sobre prorgamación”

2 - “¿Qué tal tomar un curso de marketing digital ?

3 - “Hoy es un gran día para comenzar a aprender de diseño”

4 - ¿Y si aprendemos algo de negocios online ?

5 - “Veamos un par de clases sobre producción audiovisual”

6 - “Tal vez sea bueno desarrollar una habilidad blanda en Platzi”

En caso indicar un número distinto, pedir al usuario que ingrese uno en el rango válido. */

let num = parseFloat(prompt("Ingresa un número entre el 1 y 6"));
document.write(mensajeOpcionales(num));

function mensajeOpcionales(num) {

    let result;

    switch (num) {
        case 1:
            result = "Hoy aprenderemos sobre prorgamación";
            break;
        case 2:
            result = "¿Qué tal tomar un curso de marketing digital ?";
            break;
        case 3:
            result = "Hoy es un gran día para comenzar a aprender de diseño";
            break;
        case 4:
            result = "¿Y si aprendemos algo de negocios online ?";
            break;
        case 5:
            result = "Veamos un par de clases sobre producción audiovisual";
            break;
        case 6:
            result = "Tal vez sea bueno desarrollar una habilidad blanda en Platzi";
            break;
        default:
            result = "Debes ingresar un número correspondiente al rango"
    }
    return result;
}