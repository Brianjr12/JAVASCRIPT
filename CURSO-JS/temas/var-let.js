var campista = "james";
var campista = "luis";
console.log(campista);

// let campista = "james";
// let campista = "luis";
// console.log(campista);

// * ambito var vs let

var miVariableGlobal = 4;
console.log(miVariableGlobal);

function miFuncion() {
    console.log(miVariableGlobal);

    var miVariableLocal = 8;
    console.log(miVariableLocal);
}

miFuncion()
console.log(miVariableGlobal);
// console.log(miVariableLocal); error

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// console.log(i); error

var mostrarColor = true;
if (mostrarColor) {
    let color = "azul";
    console.log(`mi color favorito es: ${color}`);
}
