var miArreglo = ["brian", 24];
console.log(miArreglo);

var estudiantes = ["mark", "pablo", "pedro", "juan"];
console.log(estudiantes);

var notas = [100, 83, 59, 56];
console.log(notas);

// * Arreglos anidados
var listaEstudiantes = [["brian, 100"], ["pablo, 95"]];
console.log(listaEstudiantes);

var listaDeProductos = [["camisa", 5.67], ["celular", 250, "S535"], ["zapatos", 37]];
console.log(listaDeProductos);

// * Acceder a los elementos de un arreglo, indice es 0,1,2 etc
var miArreglos = [10, 20, 30];
console.log(miArreglos[0]);
console.log(miArreglos[2]);

miArreglos[0] = 40;
miArreglos[1] = [1, 2, 3];
console.log(miArreglos);

// * Acceder a arreglos multidimensionales
var arreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
/*
arreglos:           [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
indices:                 0          1          2
indices internos:     0  1  2    0  1  2    0  1  2
*/
console.log(arreglo[2][1]);

// * metodo .push() agrega un elemento al final de un arreglo
var estaciones = ["invierno", "otoño", "primavera"];
estaciones.push("verano");
console.log(estaciones);

// * metodo .pop() elimina un elemento al final de un arreglo y retorna el elemnto borrado
estaciones.pop();
console.log(estaciones);
// var estacion = estaciones.pop();
// console.log(estacion);

// * metodo .shift() elimina el primer elemento de un arreglo
var estacion;
estacion = ["inviernos", "otoños", "primaveras"];
estacion.push("veranos");
estacion.shift();
console.log(estacion);

// * metodo .unshift() agrega un elemento al principio de un arreglo
var numeros = [2, 3, 4, 5];
numeros.unshift(1);
console.log(numeros);

// ! practica
var listaDeCompras = [["cereal", 3], ["leche", 2], ["galetas", 4], ["pan", 5],["refresco", 7]];

listaDeCompras.push(["pollo", 7]);
console.log(listaDeCompras);

console.log("voy a comprar " + listaDeCompras[0] [1] + " unidades de " + listaDeCompras[0] [0]);

// leche
console.log("voy a comprar " + listaDeCompras[1][1] + " unidades de " + listaDeCompras[1][0]);

// refresco
console.log("voy a comprar " + listaDeCompras[4][1] + " unidades de " + listaDeCompras[4][0]);
