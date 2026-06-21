{
  /**
 * Null Types
 */

const searchData = (query:string | null) => {
  query ? console.log(`Searching for: ${query}`) : console.log("No search query provided.");
}

//searchData("TypeScript"); // Output: Searching for: TypeScript
searchData(null); // Output: No search query provided.

/**
 * Undefined Type -> When we unsure of a type in complile time we use unknowntype.
 */

const calculateMeter = (value: unknown) => {
  if (typeof value === "number") {
    console.log(`The value in meters is: ${value/100}m`);
  }
  else if (typeof value === "string") {
    const numericValue = parseFloat(value);
    console.log(`The value in meters is: ${numericValue/100}m`);
  }
}

calculateMeter(150); // Output: The value in meters is: 1.5m
calculateMeter("200"); // Output: The value in meters is: 2m

/**
 * Never Type -> It is used to represent values that never occur. It is often used in functions that throw exceptions or have infinite loops and which will neevr return a value
 */

const throwError = (message: string): never => {
  throw new Error(message);
}

throwError("This is a custom error message."); // Output: Uncaught Error: This is a custom error message.

}