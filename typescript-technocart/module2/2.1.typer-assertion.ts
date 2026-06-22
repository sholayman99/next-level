/**
 * Type Assertion in TypeScript
 * Type assertion is a way to tell the TypeScript compiler about the type of a variable. It allows you to override the inferred type and specify a different type for a variable. This can be useful when you have more information about the type of a variable than the compiler does.
 * There are two ways to perform type assertion in TypeScript:
 * 1. Using the "as" keyword:
 *    let someValue: any = "This is a string";  
 *   let strLength: number = (someValue as string).length;
 * 2. Using the angle-bracket syntax:
 *    let strLength: number = (<string>someValue).length;
 * When a developer understand types better than typescript we call it type assertion.
 * Note: Use type assertion only when you are 100% sure about the type of the variable, as it can lead to runtime errors if used incorrectly.
 */

let value : any;

value = "Hello, TypeScript!";


//(value as string).length  // Now editor will suggest all string formula.

value = 10;
//(value as number).toFixed() // Now editor will suggest all number formula


//Example with function

function gmToKg(value: string | number): string | number | undefined{ // Here developer is 100% sure that gmToKg will return either number or string or undefined
   if(typeof value === 'string'){
    const result = parseInt(value) /1000;
    return `converted value is: ${result}`;
   }
   if(typeof value === "number"){
    return value/1000
   }
}

const res = gmToKg(10) as number ; // Here developer 100% sure that type number is available
const res2 = gmToKg('10') as string;  // Here developer 100% sure that type string is available



// Try Catch block example

type CustomError ={
  message:string
}

try {
  
} catch (error) {
  console.log((error as CustomError).message )  // Unless we make a type assertion here by creating custom error type it will show error : 'error' is of type 'unknown'.
}