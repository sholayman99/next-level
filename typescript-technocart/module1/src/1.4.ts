//Basic Data types
//1. Primitives - String, Number, Boolean, Undefined, Null, Any
//2. Non-Primitives - Array, Tuple, Enum, Object, Function

/**-> Type can be set implisively and explisively 
 * Implisive : let name = "John Doe"; // TypeScript infers the type as string
 * Explisive : let name: string = "John Doe"; // Type is explicitly set to string
*/

// String
let name: string = "John Doe";

// Number
let age: number = 30;   

// Boolean
let isStudent: boolean = false;

//Undefined
let address: undefined = undefined;

//null 
let phoneNumber: null = null;

//any
let randomValue: any = "Could be anything";
randomValue = 42; // Now it's a number  


//Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

//Tuple
let person: [number, number] = [10, 30];
//person[0] = 'Alice'; // Error: Type 'string' is not assignable to type 'number'
person[0] = 25; // Valid
person[1] = 40; // Error: Tuple type '[number, number]' of length '2' has no element at index '2'

let person2: [string, number] = ["Alice", 30];
person2[0] = "Bob"; // Valid
person2[1] = 25; // Valid

let person3: [string, number, boolean] = ["Charlie", 40 , false];
person3[0] = "Dave"; // Valid
person3[1] = 35; // Valid
person3[2] = true; // Valid