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
