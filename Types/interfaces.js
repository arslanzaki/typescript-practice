// INTERFACE VS TYPE ALIAS
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", congrats on turning ").concat(person.age);
};
console.log(sayHappyBirthday({ name: "Arslan", age: 22 }));
var shoes = {
    name: "Blue Suede Shoes",
    price: 2500,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.3));
