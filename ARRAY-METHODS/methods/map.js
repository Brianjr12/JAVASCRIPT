const { students } = require("../modules/data");

// () para indicar que es un objeto y el ...estudiantes para que copie los elementos de ese arreglo
const newObject = students.map((estudiantes) => ({
  ...estudiantes,
  title: `${estudiantes.name} - ${estudiantes.course}`,
}));
console.log(newObject);

const doubleAge = newObject.map(estudiantes => ({
   ...estudiantes,
   age: estudiantes.age * 2,
}))
console.log(doubleAge)