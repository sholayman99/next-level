{
  /**
 * Interface and Type Assias
 * Interface Only uses for Object. As Array,function is also object in JS so we can use interface for them as well
 * Type allias can be used for any data type.
 */

type User1 ={
  name:string;
  roll:number;
}

const user1:User1 ={
  name:"John",
  roll : 1
}

//Using interface

interface User2 {
  name:string;
  roll:number;
}

const user2: User2 ={
  name:'Johny',
  roll:2
}

// Extenting type allias of User1 by intersection
 type UserWithAge = User1 & {age:number};

 const user3 : UserWithAge ={
    name:'Kabir',
    roll:3,
    age: 12
 }

 //Extending Interface
 interface UserWithAge2 extends User2 {
  name:string;
  roll:number;
  age:number;
 }

  const user4 : UserWithAge ={
    name:'Kabir',
    roll:3,
    age: 12
 }

 // Extend type allias 
interface UserWithMobileNumber extends UserWithAge {
  name:string;
  roll:number;
  age:number;
  mobile:string;
}

const user6 = {
  name:'Kabir',
  roll:3,
  age: 12,
  mobile:"01576378392"
}



//Type allias with array
type arr = number[];

const ages:arr = [1,2,3];

//Interface with array
interface arr2 {
  [index:number]:number    //[ Array Index : Index Type] : Value Type
}

const rolls = [12,13,14]


//Type allias with function

type Add = (num1:number,num2:number) => number;

const add:Add = (num1,num2) => num1+num2;

//Interface with fucntion

interface Add2 {
  (num1:number,num2:number) : number
}

const add2:Add2 = (num1,num2) => num1+num2;

}