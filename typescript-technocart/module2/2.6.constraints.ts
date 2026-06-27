{
  //
 /**
  * constraints
  */

 const createStudent = <T extends {id:number,name:string,email:string}>(student:T) =>{
   const course = "Next Level";
   return {
    ...student,
    course
   }
 }

 const student1 = createStudent({
  id:1,
  name:"A",
  email: "a@mail.com",
  devType:"NLWD"
 });

 const student2 = createStudent({
  id:2,
  name:"B",
  email: "b@mail.com",
 hasWatch:true
 });

 //const student3 = createStudent({emni:"emni"}); // As we added constraints in params so for being student id,name,email is required
 //Object literal may only specify known properties, and 'emni' does not exist in type '{ id: number; name: string; email: string; }'.

  //
}