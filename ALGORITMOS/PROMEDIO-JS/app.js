// Pedir el nombre de la materia
let nombreMateria = prompt("Ingrese el nombre de la materia:");

// Pedir cuántas notas son (deben ser al menos 2)
let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea calcular (debe ser al menos 2):"));

// Validar que la cantidad de notas sea válida
while (isNaN(cantidadNotas) || cantidadNotas < 2) {
    cantidadNotas = parseInt(prompt("La cantidad de notas ingresada no es válida. Ingrese la cantidad de notas que desea calcular (debe ser al menos 2):"));
}

// Pedir el nombre del estudiante
let nombreEstudiante = prompt("Ingrese su nombre:");

// Obtener las notas del estudiante
let notas = [];
for (let i = 1; i <= cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota número ${i}:`));

    // Validar que la nota sea un número válido
    while (isNaN(nota)) {
        nota = parseFloat(prompt(`La nota ingresada no es válida. Ingrese la nota número ${i}:`));
    }

    notas.push(nota);
}

// Calcular el promedio de las notas
let promedio = notas.reduce((a, b) => a + b, 0) / cantidadNotas;

// Mostrar el resultado en el documento HTML
let resultado = document.getElementById("resultado");
resultado.innerText = `${nombreEstudiante}, tu promedio en ${nombreMateria} es: ${(promedio).toFixed(2)}%`;

// Agregar un botón para actualizar la página
document.getElementById("refresh").addEventListener('click', () => location.reload());
