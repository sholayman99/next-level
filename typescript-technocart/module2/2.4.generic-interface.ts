{
  //

/**
 * Generic Interface
 */

interface Computer {
  name:string,
  model:string,
  releaseYear:number
}

interface Developer<T,X=null> {
  name:string,
  age:number,
  computer:Computer,
  smartWatch: T,
  bike?:X
}

type SmartWatch ={
  brand:string,
  price:number
}



const goribDeveloper: Developer<SmartWatch> = {
  name:"X",
  age:25,
  computer:{
    name:"Acer",
    model:"Acer-123",
    releaseYear: 2016
  },
  smartWatch:{
    brand:"AXZ",
    price:1200
  }};


const moddhobittoDeveloper : Developer <SmartWatch,{company:string,CC:number}> ={
   name:"X",
  age:25,
  computer:{
    name:"Asus",
    model:"Asus-123",
    releaseYear: 2016
  },
  smartWatch:{
    brand:"AXZ",
    price:1600
  },
  bike:{
    company:"Hero",
    CC: 100
  }
}  

interface RichBike {
  company:string,
  CC:number,
  price:number,
  mileage:string
}

const richDeveloper : Developer <SmartWatch,RichBike> = {
  name:"X",
  age:25,
  computer:{
    name:"Asus",
    model:"Asus-123",
    releaseYear: 2016
  },
  smartWatch:{
    brand:"AXZ",
    price:1600
  },
  bike:{
    company:"Hero",
    CC: 100,
    price:3000000,
    mileage:"40/L"
  }
}
















  //
}