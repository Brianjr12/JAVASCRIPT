const { students } = require("../modules/data");

const fullName = [];

students.forEach(estudiantes => {
  fullName.push(`${estudiantes.name} ${estudiantes.lastname}`);
});
console.log(fullName);