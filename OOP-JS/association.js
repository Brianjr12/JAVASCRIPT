class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }
}

const brian = new Person("brian" , "ojeda");
const grego = new Person("gregory", "ojeda");

grego.parent = brian;

console.log(grego);
console.log(brian);