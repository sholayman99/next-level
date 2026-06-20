/**
 * Reference Types --> Object
 * 1.5
 */

const person:{
  firstName: string;
  middleName?: string; // Optional property(?) 
  lastName: string;
  isMArried: boolean;
  children?: string[];
  company: "Vistasystech" //Literal type--> When a value is working as a type
  // readOnly comapny:string; // Readonly property 
} = {
  firstName: "John",
  lastName: "Doe",
  isMArried: true,
  company: "Vistasystech"
}