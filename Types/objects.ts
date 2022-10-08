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

// ##########################################################
// NESTED OBJECTS

const describePerson = (person: {
  name: string;
  age: number;
  parentNames: {
    mom: string;
    dad: string;
  };
}) => {
  return `Person: ${person.name}, Age: ${person.age}, \nParents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};

describePerson({
  name: "Arslan",
  age: 22,
  parentNames: { mom: "Fozia", dad: "Asghar" },
});

// ##########################################################

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.045;
}
function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 123789,
  credits: {
    producer: "Arslan Zaki",
    writer: "Alex Bhatti",
  },
};

console.log(calculatePayout(mySong));
printSong(mySong);

// ##########################################################
// OPTIONAL PROPERTIES

type PointCoords = {
  x: number;
  y: number;
  z?: number;
};

const myPointCoords01: PointCoords = { x: 123, y: 888, z: 090 };
const myPointCoords02: PointCoords = { x: 313, y: 198 };

// ##########################################################
// READONLY MODIFIER

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12345,
  username: "arslanzaki",
};

console.log(user.id);
//user.id = 9898; ERROR

// ##########################################################
// INTERSECTION TYPES

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 7,
  color: "green",
};

// ##########################################################

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number };

const myCatDog: CatDog = {
  numLives: 7,
  breed: "persian",
  age: 3,
};
