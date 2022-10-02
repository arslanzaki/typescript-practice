const encourageStudent = (name: string) => {
  return `Hey, ${name}, you're doing great`;
};

encourageStudent("Arslan");

// encourageStudent(6); ERROR

// NOTE: By Default Function Parameter Type Is 'ANY'

// ######################################################

function square(num: number) {
  return num * num;
}

// square("Hello"); ERROR
square(55);

// ######################################################

const userData = (name: string, age: number, isMarried: boolean) => {
  return `Name: ${name}\nAge: ${age}\nisMarried: ${isMarried}`;
};

userData("Arslan", 22, false);
// userData('Arslan') ERROR
// userData('Arslan', 'myAge', 88); ERROR
// userData('Arslan', false, 22); ERROR

// ######################################################

function greet(name: string = "Mr.X") {
  return `Hello, ${name}`;
}

greet("Arslan");
greet();
// greet(123); ERROR

// ######################################################
// FUNCTION RETURN TYPES

const addNums = (x: number, y: number): number => {
  // x + y ERROR
  return x + y;
};

// ######################################################
// ANONYMOUS FUNCTIONS

const numbers = [1, 2, 3];
numbers.forEach((num) => {
  // Type Of 'num' will be NUMBER
});

const colors = ["red", "green", "blue"];
colors.map((color) => {
  // Type of 'color' will be STRING
});

// ######################################################
// VOID TYPE

function doSomething(name: string): void {
  // By Default, the function's return type will be VOID
  // We can also specify that
  console.log(name);

  // return name; ERROR
}

// ######################################################
// NEVER TYPE

function makeError(msg: string): never {
  throw new Error(msg)
}

function gameLoop(): never {
  while(true) {
    console.log("Loop")
  }
}

