// Tuples are a special type exclusive to TypeScript (they don't exist in JS)
// Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays

let myTuple: [number, string];

myTuple = [10, "TypeScript"];

// myTuple = ["TypeScript", 10]; ERROR

// ##########################################################

const color: [number, number, number] = [12, 34, 254];

// ##########################################################

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];

// goodRes[0] = "200"; ERROR
// goodRes.push("Hello"); OK
// goodRes.pop(); OK
// goodRes.pop(); OK
// goodRes.pop(); OK


// Array Of Tuples
const responses: HTTPResponse[] = [
  [200, "OK"],
  [404, "NOT FOUND"],
];
