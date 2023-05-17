class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }

  gree() {
    return `Hello ${this.name} ${this.lastname}`
  }

}

const user = new Person("Brian", "Ojeda");
const user2 = new Person("Gregory", "Ojeda");

console.log(user.gree());
console.log(user2.gree());