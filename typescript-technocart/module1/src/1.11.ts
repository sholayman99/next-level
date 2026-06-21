{


/*
 * Ternary Operator(?)
 */

const age : number = 18;

// if (age >= 18) {
//   console.log("You are an adult.");
// }
// else {
//   console.log("You are a minor.");
// }


const isAdult : boolean = age >= 18 ? true : false;
//console.log(isAdult ? "You are an adult." : "You are a minor.");


/**
 * Nullish Coalescing Operator (??)--> Only works with null and undefined values. It does not consider other falsy values like 0, false, or empty string as nullish.
 */

const isAuthenticated = null;
const user = isAuthenticated ?? "Guest";
//console.log(user); // Output: Guest

//Example of Nullish Coalescing and Ternary Operator With use case

const isAdmin = null;
// const isAdmin = "";

const role  = isAdmin ?? "user";
console.log(`Your role is: ${role}`); // Output: Your role is: user when iasAdmin is null or undefined.But if isAdmin is empty stringor any falsy value rather than null or undefined it will print that empty string.
 isAdmin ? console.log("You are an admin.") : console.log("You are a user.");

 /**
  * Optional Chaining Operator (?.) --> It allows you to access properties of an object that may be null or undefined without causing a runtime error. If the property is null or undefined, it returns undefined instead of throwing an error.
  * It is useful when dealing with nested objects or optional properties.
  * It can be used with function calls as well.
  */

type Person ={
  name:string;
  age:number;
  role: 'admin' | 'user' | 'guest';
  permanentAddress?: string; // Optional property
  presentAddress: string; 
 }

 const person: Person = {
  name: "John",
  age: 30,
  role: "admin",
  presentAddress: "123 Main St"
 }

 const result = person?.permanentAddress ?? "No Permanent Address available";
 console.log(result); // Output: No Permanent Address available

}