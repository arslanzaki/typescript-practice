var age = 22;
age = 33;
age = "43";
var coordinates = { x: 33, y: 113 };
coordinates = { lat: 121.33, long: 23.43 };
// ########################################################
// TYPE NARROWING
function printAge(age) {
    console.log("You're ".concat(age, " years old"));
}
printAge(22);
printAge("22");
// ########################################################
function calculateTax(price, tax) {
    //return price+tax; ERROR
    //price.replace("$", ""); ERROR
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price + tax;
}
// ########################################################
var isTeenager = function (age) {
    if (typeof age === "string") {
        console.log(age.charAt(0) === "1");
    }
    if (typeof age === "number") {
        console.log(age > 12 && age < 20);
    }
};
isTeenager("20");
isTeenager(16);
