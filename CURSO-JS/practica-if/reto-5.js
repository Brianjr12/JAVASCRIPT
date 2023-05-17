/* Reto #5 - ¿Cómo está el clima?

Crea un programa que pregunte al usuario si está lloviendo, en caso de responder “sí” pregunta si está haciendo mucho viento y si responde “sí” nuevamente muestra un mensaje indicando que hace mucho viento para salir con una sombrilla. En caso contrario, anima al usuario a que lleve una sombrilla. Para el caso de responder “no” en la primer pregunta, entonces solo desea un bonito día.
Considera que las respuestas pueden pasarse a minúsculas para evitar posibles errores. */




let resp1 = String(prompt("Está lloviendo ?"));

let respConversion = resp1.toLowerCase();

let si = "sí"

document.write(clima(respConversion));

function clima(respConversion) {
    if (respConversion == si) {
        let resp2 = prompt("Está haciendo mucho viento ?")
        let respConversion1 = resp2.toLocaleLowerCase();
        if (respConversion1 == si) {
            return "Hace mucho viento para salir con una sombrilla";
        } else {
            return "Deberías llevar una sombrilla";
        }
    }
    else if (respConversion == "no") {
        return "Ten un bonito día";
    }
}