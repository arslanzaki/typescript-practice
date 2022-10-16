// INTERFACE VS TYPE ALIAS
// INTERFACES can only describe the shape of the object [NOT literal types]
// We can reopen INTERFACES and add on but not TYPE ALIAS
// We can implement Inheritance [Multiple Inheritance] using EXTEND keyword in INTERFACES but not in TYPE ALIAS
// In TYPE ALIAS use implement Inheritance using INTERSECTION TYPES (&)

// SYNTAX EXAMPLES
// interface Chicken {

// }
// type AnotherChicken = {

// }

// 

// ###################################################################################

interface Person {
  // readonly id: number;
  name: string;
  age: number;
  nickname?: string; //Optional
  // sayHi: () => string;  // Means The Function Will Return String & Accept No Argument. If We Give That Function Any Argument Then It Will Give Us An ERROR
}

const sayHappyBirthday = (person: Person) => {
  return `Hey ${person.name}, congrats on turning ${person.age}`;
};

console.log(sayHappyBirthday({ name: "Arslan", age: 22 }));

// ########################################################################################

interface Product {
  name: string;
  price: number;
  applyDiscount: (discount: number) => number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 2500,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return newPrice;
  },
};

console.log(shoes.applyDiscount(0.3));

// ########################################################################################
// We can reopen INTERFACES but can't reopen TYPE ALIAS

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const bulli: Dog = {
  name: "Bulli",
  age: 5,
  breed: "bulldog",
  bark() {
    return "WAU WAU!";
  },
};

// ########################################################################################
// Extending Interfaces

interface ServiceDog extends Dog {
  job: "Security Dog" | "Drug Sniffer" | "Guide Dog"; // We Could Also Use Enums
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 3,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "Guide Dog",
};

// ########################################################################################
// Multiple Inheritance

interface Developer {
  name: string;
}

interface Tester {
  readonly id: number;
  email: string;
}

interface SoftwareEngineer extends Developer, Tester {
  level: string;
  skills: string[];
}

const joe: SoftwareEngineer = {
  name: "Joe Blake",
  id: 12345,
  email: "joe@gmail.com",
  level: "Junior",
  skills: ["JavaScript", "ReactJS"],
};
