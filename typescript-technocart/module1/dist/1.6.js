"use strict";
/**
 * Learing Functions in TypeScript
 *
 * Functions are reusable blocks of code that perform a specific task. In TypeScript, you can define functions with type annotations to ensure type safety. Here's how you can create and use functions in TypeScript:
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Normal function declaration
function add(num1, num2) {
    return num1 + num2;
}
;
add(5, "10"); // Output: 510 // This will not throw an error at compile time, but it can lead to unexpected behavior at runtime.
// Function with type annotations
function addAgain(num1, num2) {
    return num1 + num2;
}
;
// Function with Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
;
//Arrow function
const multiply = (num1, num2) => num1 * num2;
;
multiply(5, 10); // Output: 50
//Object Method -> When a function is defined as a property of an object, it is called a method. Methods can access and manipulate the properties of the object they belong to using the 'this' keyword.
const person1 = {
    name: "Alice",
    balance: 0,
    addBalance(balance) {
        return this.balance += balance;
    }
};
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((element) => element * element); // Output: [1, 4, 9, 16, 25]
console.log(newArr);
