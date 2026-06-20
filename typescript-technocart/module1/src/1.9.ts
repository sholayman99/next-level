{

/**
 * Type Alias
 */


//Type Alias for Object

type Person = {
  firstName: string;
  middleName?: string; // Optional property(?)
  lastName: string;
  isMArried: boolean;
  children?: string[];
  company: "Vistasystech" //Literal type--> When a value is working as a type
  // readOnly comapny:string; // Readonly property 
}

const person1: Person = {
  firstName: "John",
  middleName: "Michael",
  lastName: "Doe",
  isMArried: true,
  company: "Vistasystech"
}

const person2: Person = {
  firstName: "Jane",
  lastName: "Smith",
  isMArried: false,
  company: "Vistasystech"
}

const person3: Person = {
  firstName: "Alice",
  middleName: "Marie",
  lastName: "Johnson",
  isMArried: true,
  children: ["Bob", "Charlie"],
  company: "Vistasystech"
}

//Type Alias for String
type Name = string;

const name1: Name = "John";
const name2: Name = "Jane";

//Type Alias for Number
type Age = number;  

const age1: Age = 30;
const age2: Age = 25;

//Type Alias for Boolean
type IsMarried = boolean;

const isMarried1: IsMarried = true;
const isMarried2: IsMarried = false;

//Type Alias for Array
type NumbersArray = number[];

const numbers1: NumbersArray = [1, 2, 3, 4, 5];
const numbers2: NumbersArray = [10, 20, 30];

//Type Alias for Tuple
type NameAgeTuple = [string, number];   

const personInfo1: NameAgeTuple = ["John", 30];
const personInfo2: NameAgeTuple = ["Jane", 25];

//Type Alias for Function

type Add = (num1:number, num2:number) => number;

const add :Add = (num1, num2) => num1 + num2;

const multiply :Add = (num1, num2) => num1 * num2;

const subtract :Add = (num1, num2) => num1 - num2;

const divide :Add = (num1, num2) => num1 / num2;


}