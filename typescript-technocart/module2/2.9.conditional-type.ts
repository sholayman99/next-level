{
  //

  /**
   * Conditional type -> When  a types provided result by depending on other type/types
   */

  //type a1 = null; //true
  type a1 = number; //false
  type b1 = undefined;

  type c1 = a1 extends null ? true : false // true when a1= null and false for any other type such as a1=number

  type d1  = a1 extends null ? true : b1 extends undefined ? true : any;


  type Something = {
    bike:string,
    car:string,
    plane:string
  }

 
  //type CheckVehicle<T> = T extends "bike" | "car" | "plane" ? true : false;
  type CheckVehicle<T> = T extends keyof Something ? true : false;  //-> bertter approach

  type HasPlane = CheckVehicle<"bike">; // true -> part of key of something type
  type HasBoat = CheckVehicle<"boat">; //false-> not part of key of Something type


  //
}