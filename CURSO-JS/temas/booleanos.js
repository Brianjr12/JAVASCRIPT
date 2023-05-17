// console.log(true);
// console.log(false);

// * operador de igualdad ==
console.log(5 == 5);
// console.log("hola" == "Hola"); false
console.log([1, 2, 3] == [1, 2, 3]);

// * operador de igualdad estricta para ver los tipos de datos ===

// console.log(9 === 9); true
console.log(9 === "9");

var a;
var b;
a = 5;
b = "5";
// console.log(a == b); true
// console.log(a === b); false

// * operador de desigualdad !=
console.log(9 != 2);
// console.log([1, 2, 3] != [1, 2, 3]); true

// * operador de desigualdad estricta !== tipo de datos
console.log(1 !== "1");

// * mayor que >
// console.log(6 > 5); true
// console.log(3 > 10); false

// console.log("B" > "A"); true
// console.log("ACB" > "ABC"); true

var a = 15;
var b = 7;
// console.log(a > b); true
// console.log(b > a); false

// * mayor o igual que >=
// console.log(5 >= 5); true

// * menor que <
// console.log("a" < "b"); true
// console.log(14 < 10); false

// * menor o igual que <=
// console.log(5 <= 5); true

// * operador logico AND &&
// console.log(true && true); true
// console.log(true && false); false
// console.log(false && false); false

var va = 8;
console.log((va > 5) && (va < 10)); //true

var vx = 10;
console.log((vx > 12) && (vx < 7)); //false

console.log((20 == 20) && (20 > 21)); // false


// * operador logico OR ||
// console.log(true || true); true
// console.log(true || false); true
// console.log(false || false); false

var num = 8;
console.log((num < 5) || (num > 1)); //true

// * operador logico NOT !
// console.log(!true); false
// console.log(!false); true

var num1 = 12;
console.log(!(num1 > 5)); // false
console.log(!(num1 < 5)); // true