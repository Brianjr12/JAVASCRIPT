const MI_CONSTANTE = 35;
console.log(MI_CONSTANTE);

function calcularAreaCirculo(radio) {
    const PI = 3.14;

    if (radio < 0) {
        return undefined
    }

    return PI * (radio ** 2)

}

console.log(calcularAreaCirculo(10));

// * mutar arreglo declarado con const
const MI_ARREGLO = [1, 2, 3, 4];

MI_ARREGLO[0] = 5;

console.log(MI_ARREGLO);

// * crear un objeto inmutable
let colores = {
    verde: "#10e04b",
    azul: "#1b50e0",
    negro: "#000",
    blaco: "#fff"
};

Object.freeze(colores);

colores.amarillo = "#345sg5";

console.log(colores);