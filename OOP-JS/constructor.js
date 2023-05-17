const user = {
	Name: "Brian", //propierties
	lastname: "Ojeda",
	age: 19,
	hobbies: ["read", "programming", "listen to music"],
	address: {
		street: "via españa",
		city: "Panamá"
	},
	login: false,
	showFullName() {
		return `${this.Name} ${this.lastname}`
	}

}

// constructor
// function Person() {
// 	this.Name = ""
// 	this.lastname = ""
// 	this.age = 0
// 	this.showFullName = function () {
// 		return `${this.Name} ${this.lastname}`
// 	}
// }
// const user2 = new Person()
// user2.Name = "Gregory";
// user2.lastname = "Ojeda"
// user2.age = 13

// console.log(user2.showFullName());

// object

// const user1 = {
// 	Name: "leo",
// 	lastname: "messi",
// 	age: 35,
// 	showName() { }
// };

// console.log(Object.keys(user1));
// console.log(Object.values(user1));

// * que es new

function Person(Name, lastname) {
	this.Name = Name
	this.lastname = lastname
	this.displayName = function () {
		return `${this.Name} ${this.lastname}`
	}
}

const john = new Person("john", "díaz");
const mario = new Person("mario", "ojeda");
const bea = new Person("beatriz", "díaz");

// * agregando un metodo a ese objecto
john.greet = function () {
	return `Hello i'm ${this.Name}`
}
console.log(john.greet());

// * agregando un metodo al constructor para que lo tenga todos los objectos
Person.prototype.greet1 = function () {
	return `Hello i'm ${this.Name}`
}

console.log(mario.greet1());
console.log(bea.greet1());