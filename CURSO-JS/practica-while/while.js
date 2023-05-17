// * Elabore un programa que imprima los números del 1 al 10
let num = 1;
while (num <= 10) {
    console.log(num);
    num++
}

function multi(num) {
    for (let i = 1; i <= 10; i++) {
        console.log( `El resultado de multiplicar ${num} x ${i} es: ${num * i}`);
    }
    return ""
}
console.log(multi(4));
console.log(multi(3));
console.log(multi(12));