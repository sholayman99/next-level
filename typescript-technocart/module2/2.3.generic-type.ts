{
  //
   /**
    * Generic Type
    */

   //Declare Generic Type
   type GenericType<T> = Array<T>;

   //const rollArray : number[] = [1,2,3];
  //  const rollArray : Array<number> = [1,2,3];
   const rollArray : GenericType<number> = [1,2,3];


   //const manushArray : string[] = ['Mr. X',"Mr. Y",'Mr. Z'];
  //  const manushArray : Array<string> = ['Mr. X',"Mr. Y",'Mr. Z'];
   const manushArray : GenericType<string> = ['Mr. X',"Mr. Y",'Mr. Z'];


  //  const boolArray : boolean[] = [true,false,true];
   //const boolArray : Array<boolean> = [true,false,true];
   const boolArray : GenericType<boolean> = [true,false,true];


   //Generic Type for Array of object

   const peoples : GenericType <{name:string,age:number}>  =[
    {
     name:"A",
     age:18
    },
     {
     name:"B",
     age:21
    }
   ]

   //Generic Tuple
   type GenericTuple <X,Y> = [X,Y];

   const family : GenericTuple <string,string> = ['X','Y'];
   const ages : GenericTuple <number,number> = [10,12];
   const manush:GenericTuple<string,number> = ['X',12];

  //
}