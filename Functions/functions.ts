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

function greet(name: string = 'Mr.X') {
  return `Hello, ${name}`;
}

greet('Arslan');
greet();
// greet(123); ERROR
