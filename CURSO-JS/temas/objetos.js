var miPerro = {
    "nombre": "gino",
    "edad": 5,
    "peso": 6,
    "raza": "beagle"
};

var miObjeto = {
    5: "cinco"
}

// * Acceder a propiedades: notación de punto

var miPerro1 = {
    "nombre": "gino",
    "edad": 5,
    "peso": 6,
    "raza": "beagle"
};

console.log(miPerro1.nombre);
console.log(miPerro1.edad);
console.log(miPerro1.raza);

// * Acceder a propiedades: notación de corchetes

var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 200,
    "numeroDeHojas": 100
};
console.log(miCuaderno["numero de paginas"]);
console.log(miCuaderno.numeroDeHojas);

// * Acceder a propiedades: variables

var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
};
var posicion = 3;

console.log(resultados[posicion]);

// * Actualizar propiedades

var miMochila = {
    color: "azul",
    tamaño: "mediano",
    contenido: ["botella de agua", "cuaderno"]
}

console.log(miMochila.color); //azul

// actualizada
miMochila.color = "verde";
console.log(miMochila.color);

miMochila.contenido.push("lápiz");
console.log(miMochila.contenido);

miMochila.contenido = [];
console.log(miMochila.contenido);

// * agregar Propiedades

var curso = {
    titulo: "aprende js desde cero",
    idioma: "español",
    duracion: 30
};

curso.vistas = 34500;
// console.log(curso.vistas);
console.log(curso);

// * Eliminar Propiedades

delete curso.duracion;
console.log(curso);

// * Objetos para busquedas

function buscarElementoQuimico(simbolo) {

    var elementoQuimico = "";

    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
            break;
        case "S":
            elementoQuimico = "Azufre";
            break;
        case "Cl":
            elementoQuimico = "Cloro";
            break;
        case "He":
            elementoQuimico = "Helio";
            break;
        case "B":
            elementoQuimico = "Boro";
            break;
        case "Li":
            elementoQuimico = "Litio";
            break;
    }
}

// * transformar a objeto

function buscarElementoQuimico(simbolo) {

    var simbolosQuimico = {
        al: "Aluminio",
        s: "Azufre",
        cl: "Cloro",
        he: "Helio",
        b: "Boro",
        li: "Litio"
    };
    return simbolosQuimico[simbolo];
}

console.log(buscarElementoQuimico("al"));
console.log(buscarElementoQuimico("b"));

// * Verificar propiedades de un objeto

var miNoteBook = {
    color: "azul",
    categoria: 3,
    precio: 4.56
};

console.log(miNoteBook.hasOwnProperty("color"));
console.log(miNoteBook.hasOwnProperty("origen"));

function verificarPropiedad(obj, propiedad) {

    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad]
    } else {
        return "el objeto no tiene esta propiedad";
    }
}

console.log(verificarPropiedad(miNoteBook, "color"));
console.log(verificarPropiedad(miNoteBook, "origen"));

// * Objetos complejos

var ordenesDePizzas = [{

    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "parallevar": true

},

{
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "parallevar": false
},

{
    "tipo": "napolitana",
    "tamaño": "individual",
    "precio": 6.78,
    "toppings": [],
    "paraLlevar": true
}
];

console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0].toppings);
console.log(ordenesDePizzas[1].toppings[1]);

// * Objetos anidados

var miReceta = {
    descripcion: "mi postre favorito",
    costo: 15.6,
    ingredientes: {
        masa: {
            harina: "100 grs",
            sal: "1 cucharadita",
            agua: "1 taza"
        },
        cobertura: {
            azucar: "120 grs",
            chocolate: "4 cucharadas",
            mantequilla: "200 grs"
        }
    }
};
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.cobertura.azucar);

// * Arreglos aninadados

var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },

    {
        tipo: "árboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];

var primeraFlor = misPlantas[0].lista[0];

console.log(misPlantas[0].lista);
console.log(primeraFlor);

console.log(misPlantas[1].lista);
console.log(misPlantas[1].lista[1]);

// ! Practica, COLECCIÓNDE DISCOS

/* Se te da un objeto literal que representa una parte de tu colección de álbumes musicales.

Cada álbum tiene un número de id único como clave y varias otras propiedades.

No todos los álbumes tienen una información completa.

/*Define una funcion actualizarDiscos que tome los siguientes parametros:
= discos(el objeto que representa la coleccién de discos).

- id.
- propiedad("artista" o “canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas
para modificar el objeto pasado a la funcién:

- Si "valor" es una cadena vacia, elimina la propiedad
del album correspondiente.

- Si “propiedad” es igual a la cadena de caracteres “canciones” pero
el album no tiene una propiedad llamada "canciones", crea un arreglo vacio y agrega “valor” a ese arreglo.

- Si “propiedad” es igual a la cadena de caracteres “canciones” y
"valor" no es una cadena vacia, agrega “valor” al final del arreglo
de canciones del album correspondiente.

- Si "valor" no es una cadena vacia y "propiedad" no es igual a
"canciones", asigna el valor del parametro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.
*/



var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439:
    {
        tituloDelAlbum: "ABBA Gold"
    }
};
function actualizarDiscos(disco, id, propiedad, valor,) {

    if (valor === "") {
        delete disco[id][propiedad];
    }
    else if (propiedad === "canciones") {
        disco[id][propiedad] = disco[id][propiedad] || [];

        disco[id][propiedad].push(valor);
    }
    else {
        disco[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "")

console.log(coleccionDeDiscos[7853].tituloDelAlbum);

console.log(coleccionDeDiscos[5439].canciones);

actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "mamma mia")

console.log(coleccionDeDiscos[5439].canciones);

console.log(coleccionDeDiscos[5439].artista);

actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA")

console.log(coleccionDeDiscos[5439].artista);




