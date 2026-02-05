// Type Annotations in TypeScript

// Variable declarations
let age: number = 26;
let name: string = "Muhammad Hamza Mahmood";
let isStudent: boolean = false;

let ids: number[] = [1, 2, 3, 4, 5];
let hobbies: string[] = ["Reading", "Traveling", "Gaming"];
let stringOrNumberArray: (string | number)[] = ["Hello", 42, "World", 100]; // It will only accept string or number values
let personWithAge: [string, number] = ["Alice", 30]; // Tuple

// Only use this in extreme cases
let x: any = "Could be anything";
let y: any[] = [1, true, "Hello"];

// function declarations
function add(a: number, b: number): number {
  return a + b;
}

const concatStrings = (str1: string, str2: string): string => {
  return str1 + str2;
};

// Interface in TypeScript
interface Person {
  id: number;
  name: string;
  age?: number; // Use ? to make property optional
  isEmployed: boolean;
  greet(message: string): void; // void means it does not return anything
}

// Object adhering to the Person interface
const Person1: Person = {
  id: 1,
  name: "Alice",
  age: 30,
  isEmployed: true,
  greet: (message: string) => {
    console.log(`Hello ${message}`);
  },
};

const Person2: Person = {
  id: 2,
  name: "Bob",
  isEmployed: false,
  greet: (message: string) => {
    console.log(`Hi ${message}`);
  },
};

Person1.greet(`Welcome to TypeScript! ${Person1.name}`);
Person2.greet(`Welcome to TypeScript! ${Person2.name}`);
