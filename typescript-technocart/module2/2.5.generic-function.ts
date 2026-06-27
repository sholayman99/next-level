{
//



/**
 * Generic function
 */


//Regular function
  const createArray = (param:string) : string[] =>{
    return [param];
  }

 const regularRes = createArray('string');
 
// Generic Function
const createFunctionWithGeneric =<T>(param:T):T[] =>{
   return [param] ;
} 

const stringArr = createFunctionWithGeneric<string>('string');
const boolArr = createFunctionWithGeneric<boolean>(true);
const objArr = createFunctionWithGeneric<{id:number,name:string}>({id:1,name:"A"});

type User = {name:string,address:{postal:number,dis:string}};
const objStringArr = createFunctionWithGeneric<User>({name:"B",address:{postal:1230,dis:"Tangail"}});


//Generic Function with Tuple
 const createGenericFuntionWithTuple = <T,Q>(param1:T,param2:Q):[T,Q] =>{
  return [param1,param2];
 }

 const strNumTuple = createGenericFuntionWithTuple<string,number>('A',12);
 const numStrTuple = createGenericFuntionWithTuple<number,string>(11,"B");

 const strObjTuple = createGenericFuntionWithTuple<string,User>("A",{name:"B",address:{postal:1230,dis:"Tangail"}});



//Create student using generic and ternary

const createGenericStudent = <T>(student:T) =>{
  const course = "Next Level";

 return {
    ...student,
     course
  }

}


  //
}