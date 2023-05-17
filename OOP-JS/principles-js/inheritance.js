class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
    this.age = null
  }
}

class Programmer extends Person {
  constructor(name, lastname,lenguage) {
    super(name,lastname);
    this.lenguage = lenguage
  }
}

const person = new Person("brian", "ojeda");

const programmer = new Programmer("brian", "ojeda", "javaScript");

console.log(person);
console.log(programmer);