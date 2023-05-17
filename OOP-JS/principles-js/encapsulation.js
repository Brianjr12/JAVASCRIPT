function Company(name) {
  let employees = []
  this.name = name

  this.getEmployees = function () {
    return employees
  }

  this.addEmployee = function (employee) {
    employees.push(employee)
  }
}

const company1 = new Company("coca cola")
const company2 = new Company("pepsi")

console.log(company1)
console.log(company2)

company1.addEmployee({ name: "ryan" })
company2.addEmployee({ name: "joe" })

console.log(company1.getEmployees())
console.log(company2.getEmployees())
