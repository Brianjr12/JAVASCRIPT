
const user = {
    name: "brian",
    lastname: "ojeda",
    age: 19,
    hobbies: ["read", "programming", "listen to music"],
    address: {
        street: "via españa",
        city: "Panamá"
    },
    login: false
}

let newLogin = true

user.login = newLogin


if (user.login == false) {
    console.log("no tienes acceso");
} else {
    console.log("puedes pasar");
}

const estudiante = {
    nombre: "leo",
    apellido: "perez",
    edad: 12,
}

estudiante.grado = "7C";
estudiante.nombre = "gregory";
estudiante.apellido = "ojeda"
estudiante.nota = 4.5;
delete estudiante.nota;
console.log(estudiante);

const test = (nam) => {
    return "hello " + nam
}

console.log(test("brian"));


const company = {
    name: "microsoft",
    employees: [],
    sortEmployees() {
    }
}
const saludar = () => "hello"

company.sortEmployees = saludar;

console.log(company.sortEmployees());