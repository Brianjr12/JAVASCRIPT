// * Se trata decrear una función calculadora que recibirá tres argumentos: los dos primeros deben ser números y el tercero será un símbolo: + - * / %. Las operaciones respectivas de estos símbolos será sumar, restar, multiplicar, dividir y resto.

/*La función de contemplar errores como dividir por cero en cuyo caso devolverá null.

Por ejemplo

calcular(3, 4, "*")  //12

calcular(3, 0, "/")  //null

calcular(6, 3, "%")  // 1
*/


let num1 = parseFloat(prompt("Ingrese su primer número"));

let num2 = parseFloat(prompt("Ingrese su segundo número"));

let simbolo = String(prompt("Ingrese el simbolo de operación matematica"))

document.write(calculadora(num1, num2, simbolo));

function calculadora(num1, num2, simbolo) {
    if (simbolo === "+") {
        return `El resultado de ${num1} ${simbolo} ${num2} es: ${num1 + num2}`;

    } else if (simbolo === "-") {
        return `El resultado de ${num1} ${simbolo} ${num2} es: ${num1 - num2}`;

    } else if (simbolo === "*") {
        return `El resultado de ${num1} ${simbolo} ${num2} es: ${num1 * num2}`;

    } else if (simbolo === "/") {
        return `El resultado de ${num1} ${simbolo} ${num2} es: ${num1 / num2}`;

    }
}

// console.log(calculadora(2, 12, "+"));

function calcular(number1, number2, simb) {
    let result;
    switch (simb) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }
    return `El resultado de ${number1} ${simb} ${number2} es: ${result}`;

}

console.log(calcular(12, 2, "/"));