/* Plantillas Literales o Plantillas de Cadenas.

Caracteristicas:

- Se usa el acento invertido (backtick) ~ en lugar de comillas.
- Pueden contener comillas simples y dobles.

- Las lineas se preservan como se escriben en el codigo.

- Para reemplazar una variable se escribe ${variable}.

- Dentro de ${} también puedes escribir expresiones.
 */

var a = 6;

console.log(`el valor de a es: ${a}`);

var nombre = "brian";
var edad = 18;
console.log(`mi nombre es ${nombre} y tengo ${edad} años`);

var miArreglo = [1, 2, 3, 4]

console.log(`el arreglo es ${JSON.stringify(miArreglo)}`);

var persona = {
    nombre: "gino cass",
    edad: 10
}

const SALUDO = `Hola ${persona.nombre} de ${persona.edad} años de edad`

console.log(SALUDO);

