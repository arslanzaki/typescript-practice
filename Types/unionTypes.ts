let age: number | string = 22;
age = 33;
age = "43";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 33, y: 113 };

coordinates = { lat: 121.33, long: 23.43 };

// ########################################################
// TYPE NARROWING

function printAge(age: number | string): void {
  console.log(`You're ${age} years old`);
}

printAge(22);
printAge("22");

// ########################################################

function calculateTax(price: number | string, tax: number) {
  //return price+tax; ERROR
  //price.replace("$", ""); ERROR
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }

  return price + tax;
}

// ########################################################

const isTeenager = (age: number | string): void => {
  if (typeof age === "string") {
    console.log(age.charAt(0) === "1");
  }
  if (typeof age === "number") {
    console.log(age > 12 && age < 20);
  }
};

isTeenager("20");
isTeenager(16);

// ###########################################################
// Union Types & Arrays

//const nums: number[] = [1, 5, 8];
//const stuff: any[] = ["Hello", 1, 7, false, {}, []];
//const items: number | string[] = 6;
// OR
//const items: number | string[] = ["Hello", "World"];

//const articles: number[] | string[] = ["Apple", "Banana"];
// OR
//const articles: number[] | string[] = [7, 8, 88, 909];

const stuff: (number | string)[] = [1, 6, "22", 9];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 121, long: 134 });
coords.push({ x: 55, y: 22 });

// ###########################################################
// LITERAL TYPES

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The Answer Is ${answer}`;
};

giveAnswer("yes");
// giveAnswer("ok"); ERROR

// ##########################################################

let mood: "happy" | "sad" = "happy";
mood = "sad";
// mood = "angry"; ERROR

// ##########################################################

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

const currentDay: DayOfWeek = "Saturday";
