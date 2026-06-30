{
  //
   
  /**
   * Utility Type
   */
   
  type Person ={
    name:string,
    age:number,
    email?:string,
    contactNo:number
  }


  //Pick Utility
  type Name = Pick<Person,"name">;
  type NameAge = Pick<Person,"name"|"age">

  //Omit
  type ContactInfo = Omit<Person,"name"|"age">;

  //Required
  type PersonRequired = Required<Person>;
  //Partial
  type PersonPartial = Partial<Person>;

  //Readonly
  type User = {
    name:string,
    age:number
  }

  type ReadonlyUser = Readonly<User>;

  //Record
  type MyObj = Record<string,string>   //Record <key type,value type>

  const obj1:MyObj = {
    aa:"11",
    bb:"22"
  }

  //Empty Obj Record
  const EmptyObj: Record<string,unknown> = {};


  //
}