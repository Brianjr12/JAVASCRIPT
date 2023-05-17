
const company = {
  nameComp: "apple",
  employees: []
};

class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }
}

const brian = new Person("brian", "ojeda");
const grego = new Person("gregory", "ojeda");
company.employees.push(brian)
company.employees.push(grego)

console.log(company);