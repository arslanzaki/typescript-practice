// Using Brackets
// String Array
let names: string[] = ["hello", "world"];
names.push("mars");
// Number Array
let ages: number[] = [22, 45, 33, 27];
//ages.push("twenty") ERROR
ages.push(77);

// An Alternative Syntax
// String Array
let fruitNames: Array<string> = ["apple", "banana"];
// Number Array
let fruitPrices: Array<number> = [100, 120];

const activeUsers = [];

// ##########################################################
// CUSTOM ARRAY TYPES

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 11, y: 88 });
//coords.push({y: 32}); ERROR
//coords.push({x: 67, y: '12'}); ERROR

// ###########################################################\
// MULTI-DIMENTIONAL ARRAYS

const boardGame: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
