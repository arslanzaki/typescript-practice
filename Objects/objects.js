var printName = function (name) {
    //return `Name: ${name.first} ${name.last}`;
    console.log("Name: ".concat(name.first, " ").concat(name.last));
};
printName({ first: "Arslan", last: "Zaki" });
// let coordinates: { x: number; y: number } = {
//   x: 34,
//   y: 22,
// };
// function randomCoordinate(): { x: number; y: number } {
//     return {x: Math.random(), y: Math.random()}
// }
// ##########################################################
// Excessive Properties
// printName({ first: "Ali", last: "Raza", age: 122}) ERROR (because of strict checking while directly giving object as an argument)
var myName = { first: "Ali", last: "Raza", age: 122 };
printName(myName); // No ERROR Because TS will read only first 2 properties from the variable 'myName'
var coordinates = {
    x: 34,
    y: 22
};
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age;
// ##########################################################
// NESTED OBJECTS
var describePerson = function (person) {
    return "Person: ".concat(person.name, ", Age: ").concat(person.age, ", \nParents: ").concat(person.parentNames.mom, ", ").concat(person.parentNames.dad);
};
describePerson({
    name: "Arslan",
    age: 22,
    parentNames: { mom: "Fozia", dad: "Asghar" }
});
function calculatePayout(song) {
    return song.numStreams * 0.045;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123789,
    credits: {
        producer: "Arslan Zaki",
        writer: "Alex Bhatti"
    }
};
console.log(calculatePayout(mySong));
printSong(mySong);
var myPointCoords01 = { x: 123, y: 888, z: 090 };
var myPointCoords02 = { x: 313, y: 198 };
var user = {
    id: 12345,
    username: 'arslanzaki'
};
console.log(user.id);
