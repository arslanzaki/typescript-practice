const printName = (name: { first: string; last: string }): void => {
  //return `Name: ${name.first} ${name.last}`;
  console.log(`Name: ${name.first} ${name.last}`);
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

const myName = { first: "Ali", last: "Raza", age: 122 };
printName(myName); // No ERROR Because TS will read only first 2 properties from the variable 'myName'

// ##########################################################
// TYPE ALIAS

type Point = {
  x: number;
  y: number;
};
let coordinates: Point = {
  x: 34,
  y: 22,
};

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type myNum = number;
let age: myNum;
