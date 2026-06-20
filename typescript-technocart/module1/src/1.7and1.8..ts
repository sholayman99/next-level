{
  //
  /**
 * Learing Spread Operators,Rest Operators,Destructuring in TypeScript
*/

// Spread Operator --> The spread operator (denoted by '...') allows you to expand an iterable (like an array or object) into individual elements. It is commonly used for copying arrays, merging arrays, and spreading elements in function calls.

let arr1 : number[] = [1, 2, 3];
let arr2 : number[] = [4, 5, 6];

// Merging arrays using spread operator
// let newArr :number[] = arr1.push(arr2);  // This will not work as expected because push modifies the original array and returns the new length of the array, not the merged array.

let newArr : number[] = arr1.push(...arr2); // Output: [1, 2, 3, 4, 5, 6]

//Best practice to merge arrays using spread operator
// let newArr : number[] = [...arr1, ...arr2]; // Output: [1, 2, 3, 4, 5, 6]


//Rest Operator --> The rest operator (also denoted by '...') allows you to represent an indefinite number of arguments as an array. It is commonly used in function parameters to handle variable numbers of arguments.

const sum = (num1:number, num2:number): number => num1 + num2;

sum(5, 10); // Output: 15
//But what if we want to sum more than two numbers?
// sum(5, 10, 15); // This will throw an error because the function is defined to accept only two parameters.

//  We can use the rest operator to handle this:

const sumAll = (...numbers: number[]) => {
   numbers.forEach((num:number) => console.log(`hi ${num}`));
}


//Distructuring --> Destructuring is a convenient way to extract values from arrays or properties from objects and assign them to variables. It allows for more concise and readable code.

//Object Destructuring

const user = {
  age: 30,
  name:{
    firstName: "John",
    lastName: "Doe"
  },
  isMarried: false
}

//const {} = user; // This will throw an error because the object is empty and there are no properties to destructure.

const {age,name:{firstName,lastName:lName},isMarried} = user;

//Array Destructuring

const arr3 : number[] = [1, 2, 3, 4, 5];

//const [a,b,FavNumber,...rest] = arr3; // Output: a=1, b=2, FavNumber=3, rest=[4,5]
const [,,FavNumber,...rest] = arr3; // Output: a=1, b=2, FavNumber=3, rest=[4,5]

//
}