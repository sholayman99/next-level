{
  //
/**
 * Use of Constraints with keyof
 */

  type Vehicle = {
    bike:string,
    car:string,
    ship:string
  }

  type Owner = "bike" | "car" | "ship" //manually written

  type Owner2 = keyof Vehicle;  // because we're sure that the type owner 2 will be key of Vehicle2's union (""bike" | "car" | "ship"")

 //Will show error -> Because key can't be use as index of object but using keyof as containts  `key` is guaranteed to exist on the object
 // so TypeScript can safely allow obj[key].

 
  //   const getPropertyValue = <T,Q extends "name" | "id"> (obj:T,key:Q) =>{
  //   return obj[key];
  // }

  const getPropertyValue = <T,Q extends keyof T> (obj:T,key:Q) =>{
    return obj[key];
  }

  const user = {
    name:"A",
    id:1
  }

  const owner1 = getPropertyValue(user,"id");

  const property ={
    bike:"A",
    ship:"S"
  }

  const car = getPropertyValue(property,"bike");

  //
}