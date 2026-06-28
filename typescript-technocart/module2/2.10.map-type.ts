{

//


const arrOFNumbers : number[] = [1,2,3];

// const arrOfStrings :string[] = ["1","2","3"];

const arrOfStrings : string[] = arrOFNumbers.map((num)=>{
  return num.toString();
});
console.log(arrOfStrings);


type Numbers = {
  height:number,
  width:number
}

// type Strings = {
//   height:string,
//   width:string
// }
// type Strings = {
//   [key in 'height' | 'width'] : string;
// }

type Strings = {
  [key in keyof Numbers] : string;
}

type Booleans = {
  [key in keyof Numbers] : boolean;
}













//



}