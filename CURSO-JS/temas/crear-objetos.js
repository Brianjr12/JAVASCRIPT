const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};

console.log(crearPersona("brian", 18, "español"));

// *

const crearPersona1 = (nombre, edad, idioma) => ({ nombre, edad, idioma })

console.log(crearPersona1("brian", 18, "español"));

// * metodos

const persona = {
    nombre: "gregory",
    presentarse: function () {
        return `hola mi nombre es ${this.nombre}`
    }
}
console.log(persona.presentarse());

/*
const persona = {
    nombre: "gregory",
    presentarse() {
        return `hola mi nombre es ${this.nombre}`
    }
}
console.log(persona.presentarse());
*/

// * definir una clase y crea objetos

class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

var zeus = new TransbordadorEspacial("jupiter")

console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("marte")

console.log(apolo.planeta);

class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const MI_MASCOTA = new Mascota("nora", 5);
const TU_MASCOTA = new Mascota("gino", 2);

console.log(MI_MASCOTA.nombre);
console.log(MI_MASCOTA.edad);

console.log(TU_MASCOTA.nombre);

// * Getters y setters

class Libro {
    constructor(autor) {
        this._autor = autor;
    }

    get autor() {
        return this._autor
    }

    set autor(nuevoAutor) {
        this._autor = nuevoAutor
    }
}

const libro = new Libro("anonimo")
console.log(libro.autor);

libro.autor = "gino tyrone"
console.log(libro.autor);