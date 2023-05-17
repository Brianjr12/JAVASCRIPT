/* Reto #4 - “I like turtles”

Escribe un programa que pida al usuario ingrese su animal favorito, si coloca ‘Tortuga’, ‘tortuga’, ‘TORTUGA’ o cualquier otra variante de la palabra entonces mostrar en pantalla “También me gustan las tortugas”. En caso contrario mostrar el mensaje “Ese animal es genial, pero prefiero las tortugas”. */

let userAnimalfav = (prompt("Ingrese su animal favorito"));
let animalFavorito = "TORTUGA";
let animalConversion = userAnimalfav.toUpperCase();

document.write(iLikeTurtles(animalFavorito))

function iLikeTurtles(animalFavorito) {
    if (animalFavorito == animalConversion) {
        return "También me gustan las tortugas"
    } else {
        return "Ese animal es genial pero prefiero las tortugas";
    }
}