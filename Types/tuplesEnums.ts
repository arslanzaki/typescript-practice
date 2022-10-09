// #########################################################
// TUPLES

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

// #########################################################
// ENUMS

// Enums allow us to define a SET OF NAMED CONSTANTS. We can give these constants NUMERIC or STRING values.
// There's quite a few options when it comes to enums

// NUMERIC ENUMS

// enum Responses {
//   no, // 1
//   yes, // 2
//   maybe, // 3
// }

// enum Responses {
//   no = 2, // 2
//   yes, // 3
//   maybe, // 4
// }

// enum Responses {
//   no = 2, // 2
//   yes = 10, // 10
//   maybe = 24, // 24
// }

// STRING ENUMS

// enum Responses {
//   no = "No", // No
//   yes = "Yes", // Yes
//   maybe = "Maybe" // Maybe
// }

// HETEROGENEOUS ENUMS

enum Responses {
  no = 0, // 0
  yes = 1, // 1
  maybe = "Maybe", // Maybe
}

// ###################################################

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myOrderStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.SHIPPED);
