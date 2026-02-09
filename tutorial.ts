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

// Union in TypeScript

// Variable with more than one type using Union
let userId: string | number;
userId = "ABC123"; // valid
userId = 1001; // valid

// Function with more than one type using Union
const printId = (userId: string | number): void => {
  console.log(`ID: ${userId}`);
};

printId("ABC123");
printId(456789);

// Type in TypeScript

type IDField = string | number;
let userID1: IDField = "mhm-5999";
let userID2: IDField = 5999;

const displayID = (id: IDField): void => {
  console.log(`User ID: ${id}`);
};

displayID(userID1);
displayID(userID2);

// Type and Interface are similar but Type can be used for more complex types like
// unions and intersections, while Interface is primarily used for defining the shape of objects.
// Type can be used to create type aliases, while Interface cannot. Moreover, Interface can be extended
// and implemented, while Type cannot.
// Rule: Interface → objects, Type → complex types.

// Intersection in TypeScript

interface UserIdentity {
  id: number;
  name: string;
  email: string;
}

interface BusinessPartner {
  companyName: string;
  creditScore: number;
}

type Employee = UserIdentity & BusinessPartner;

const signContract = (employee: Employee): void => {
  console.log(
    `Contract signed with ${employee.name} from ${employee.companyName}`,
  );
};

signContract({
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  companyName: "Tech Solutions Inc.",
  creditScore: 750,
});

// Through intersection, we can create a new type that combines the properties of both UserIdentity and BusinessPartner.
// This allows us to create a more complex type that can be used in our application.

// Enum in TypeScript

enum EmployeeRole {
  Admin = "Admin",
  Manager = "Manager",
  Developer = "Developer",
  Designer = "Designer",
}

const printEmpoyeeRole = (role: EmployeeRole): void => {
  console.log(`Employee Role: ${role}`);
};

printEmpoyeeRole(EmployeeRole.Admin);
printEmpoyeeRole(EmployeeRole.Developer);
