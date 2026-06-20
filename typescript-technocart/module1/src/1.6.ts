/**
 * Learing Functions in TypeScript
 * 
 * Functions are reusable blocks of code that perform a specific task. In TypeScript, you can define functions with type annotations to ensure type safety. Here's how you can create and use functions in TypeScript:
 */

// Normal function declaration
function add (num1,num2){ // When you won't provide type annotations, TypeScript will infer the types as 'any', which can lead to potential issues.
  return num1 + num2;
};

add(5, "10"); // Output: 510 // This will not throw an error at compile time, but it can lead to unexpected behavior at runtime.

// Function with type annotations
function addAgain(num1: number, num2: number): number {
  return num1 + num2;
};
// addAgain(5, "10");  // This will throw a compile-time error because the second argument is not of type 'number'.
addAgain(5, 10); // Output: 15

// Function with Default Parameters
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
};

//Arrow function
const multiply = (num1: number, num2: number): number => 
   num1 * num2;
;
multiply(5, 10); // Output: 50


//Object Method -> When a function is defined as a property of an object, it is called a method. Methods can access and manipulate the properties of the object they belong to using the 'this' keyword.
const person1 = {
  name: "Alice",
  balance:0,
  addBalance(balance:number):number{
    return this.balance += balance;
  }
};

const arr : number[] = [1, 2, 3, 4, 5];

const newArr : number[] = arr.map((element:number):number => element * element); // Output: [1, 4, 9, 16, 25]
console.log(newArr);