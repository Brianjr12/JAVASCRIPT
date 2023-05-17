// * sobrecarga
function countItems(x) {
  return x.toString().length
}
console.log(countItems("hola mundo"));
console.log(countItems(10000));

// * parametric

class stack {
  constructor() {
    this.items = [];


    this.push = (item) => {
      this.items.push(item);
    };
  }
}

const stack1 = new stack();
stack1.push('hola');

const stack2 = new stack();
stack2.push(12332);

console.log(stack1);
console.log(stack2);

// * subtype

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}
// un ejemplo de herencia
class Programmer extends Person {
  constructor(lenguage, name, lastname) {
    super(name,lastname);
    this.lenguaje = lenguage;
  }
}
// instaciar una clase
const person1 = new Person("gregory", "ojeda");
console.log(person1);

const programmer = new Programmer("javaScript", "brian", "ojeda");
console.log(programmer);

// el parametro puede ser cualquier tipo de dato, en este caso es un objecto
function writeFullName(object) {
  console.log(`${object.name + ' ' + object.lastname}`);
}

writeFullName(person1);
writeFullName(programmer);