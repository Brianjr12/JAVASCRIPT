const porcentaje = document.getElementById('porcentaje');
const numero =  document.getElementById('numero');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado')

calcular.addEventListener( 'click',proceso);


function proceso(event) {

    let numero1 = parseInt(porcentaje.value);
    let numero2 = parseInt(numero.value);

    if  (!isNaN(numero1) && !isNaN(numero2)) {
        let calculado = (numero1 * numero2) / 100;
        resultado.innerText = (`${calculado}`);
    } else {
        alert('Debes ingresar un número en los campos')
        location.reload()
    }
    event.preventDefault()
}