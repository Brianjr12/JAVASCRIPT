const user = {
    Name: "brian", //propierties
    lastname: "ojeda",
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
console.log(user.showFullName());

console.log("               ");

const account = {
    numberAccount: "1232132",
    amount: 100,
    deposit(quantity) {
        this.amount += quantity
    },
    withdraw(quantity) {
        this.amount -= quantity
    }
}

account.deposit(100);
account.withdraw(30);
account.deposit(10);
account.withdraw(20);
console.log(account.amount);