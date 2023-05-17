let array = ["brian", "ojeda", "gregory"];
// console.log(array);


function elementosArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
}
elementosArray(array)


const persona = {
    nombre: "brian",
    edad: 18,
    nacionalidad: "venezolano"
}

for (const key in persona) {
    console.log(key, persona[key]);
}
