const {students} = require('../modules/data')

const webDev = students.filter(estudiantes => 
  estudiantes.course === "Web Development"
)

console.log(webDev);