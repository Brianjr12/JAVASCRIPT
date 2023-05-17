// * Dado un array de objetos que contienen información de libros (título, autor, género y año de publicación), escribe una función que devuelva la cantidad de libros que hay de un género específico.

// * La función debe recibir como parámetros el array de libros y el género a buscar, y devolver la cantidad de libros que hay de ese género.

let arrayLibros = [
  {
    titulo: "El jardín de las mariposas",
    autor: "Dot Hutchison",
    genero: "Thriller",
    anio: 2016,
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    anio: 1967,
  },
  {
    titulo: "El resplandor",
    autor: "Stephen King",
    genero: "Terror",
    anio: 1977,
  },
  {
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    genero: "Misterio",
    anio: 2003,
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    genero: "Fantasía",
    anio: 1997,
  },
  {
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    genero: "Misterio",
    anio: 2003,
  }
];

let libros;
function cantGen(arrayLibros, genero) {
let cant = 0;
  for (let i = 0; i < arrayLibros.length; i++) {

    const libros = arrayLibros[i];

    if (libros.genero === genero) {
      cant++;
    }
  }
  cant === 0
    ? console.log("No hay libros de ese genero")
    : console.log(`hay ${cant} libros de ese genero`);
}

cantGen(arrayLibros, "Misterio");
