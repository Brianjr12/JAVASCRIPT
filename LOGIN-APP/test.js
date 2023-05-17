class Estudiantes {
    constructor(nombre, apellido, grado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.grado = grado;
        this.notas = []
    }
    agregarNotas(nota) {
        this.notas.push(nota)
    };

    eliminarNota() {
        this.notas.pop()
    };

}
const Estudiante1 = new Estudiantes("Brian", "Ojeda", "Primer semestre UTP");

const Estudiante2 = new Estudiantes("Gregory", "Ojeda", "7D");

Estudiante1.agregarNotas(91)
Estudiante1.agregarNotas(100)
Estudiante1.agregarNotas(95)
Estudiante1.eliminarNota()
console.log(Estudiante1);

Estudiante2.agregarNotas(4.5)
Estudiante2.agregarNotas(3.8)
console.log(Estudiante2);

const palabra = ["bienvenido"];
const letras = palabra[0].split('').map(l => l + ' ');
console.log(letras); // ["b", "i", "e", "n", "v", "e", "n", "i", "d", "o"]
console.log(letras.length);