const fecha = () => new Date();

// * funciones flecha con parametros

const sumarTres = (x) => x + 3;

console.log(sumarTres(4));

const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArreglos([1, 2], [3, 4, 5]));

const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
}
console.log(sumar(4, 12));

// * valores por defecto para parametros

const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(5, 3));
console.log(incrementar(11));
console.log(incrementar(parseInt("5")));

// * operador rest

function miFuncion(...args) {
    console.log(args.length);
}
miFuncion(1, 2, 3, 4);

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}
console.log(sum([1, 2], [3, 4]));
console.log("       ");

// * operador spread, descompone los arreglos

const numeros = [1, 2, 3];

function sumas(x, y, z) {
    return x + y + z
}
console.log(sumas(...numeros));

// * sintaxis de desestructuracion

const usuario = {
    nombre: "Brian ojeda",
    edad: 34
};

const { nombre, edad } = usuario;

var coordenadas = {
    x: 4,
    y: 6,
    z: 12
}

const { x, y, z } = coordenadas
console.log(x, y, z);

// * Sintaxis de desestructuración: objetos anidados

const usuario1 = {
    johnDoe: {
        edad1: 27,
        correo: "johndoe@123.com"
    }
};

const { johnDoe: { edad1: edadDelUsuario, correo: correoDelUsuario } } = usuario1
console.log(edadDelUsuario, correoDelUsuario);

const PRONOSTICO_LOCAL = {
    ayer: {
        minima: 61,
        maxima: 75
    },
    hoy: {
        minima: 64,
        maxima: 77
    },
    manana: {
        minima: 68,
        maxima: 80
    }
};

const { hoy: { minima: minimahoy, maxima: maximahoy } } = PRONOSTICO_LOCAL;


console.log(minimahoy, maximahoy);

// *Sintaxis de desestructuración: arreglos

let a;
let b;

[a, b] = [1, 2]

console.log(a, b);

let c = 8;
let d = 6;

[d, c] = [c, d]
console.log(c, d);

// * Sintaxis de desestructuración con el operador rest

let a1;
let b1;
let arr;

[a1, b1, ...arr] = [1, 2, 3, 4, 5, 6, 7]

console.log(a1, b1, arr);

const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arr1) {
    const [, , , ...nuevoArreglo] = arr1
    return nuevoArreglo
}
const arregloFinal = removerTresPrimerosElementos(arregloInicial);

console.log(arregloFinal);

// * Sintaxis de desestructuración: pasar objeto como argumento

let nuevoPerfilCliente = {
    nombre: "jane doe",
    age: 24,
    nacionalidad: "española",
    ubicacion: "españa"
};

const actualizarPerfil = ({nombre, age, nacionalidad, ubicacion}) => {
    console.log(nombre);
    console.log(age);
    console.log(nacionalidad);
    console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente)

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const puntoMedio = ({ max, min }) => (max + min) / 2.0;

console.log(puntoMedio(estadisticas));