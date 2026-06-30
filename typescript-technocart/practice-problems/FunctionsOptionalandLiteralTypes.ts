
{
  //
  type Role = 'admin' | 'user' | 'guest'
  function optionalType (name:string,age:number,role?:Role):void{
      console.log("Name:", name);
    console.log("Age:", age);
    console.log("Role:", role ?? "Not Assigned");
  }
  optionalType


  //
}