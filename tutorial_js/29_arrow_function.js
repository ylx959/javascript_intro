//arrow functions

//First type
// function hello(){
//     console.log("Hello");
// }

//Second type
// const hello=function(){
//     console.log("Hello");
// }

//Third type
// const hello=(name) => {console.log(`Hello ${name}`)
//                     console.log(`You are ${age} years old`)};

// hello("Bro",25);


// setTimeout(hello,3000);

// function hello(){
//     console.log("Hello");
// }

// setTimeout(function hello(){
//     console.log("Hello");
// },3000);

// setTimeout(()=>console.log("Hello"),3000);

//map
const numbers=[1,2,3,4,5,6];

const squares=numbers.map((element)=>Math.pow(element,2));
const cubes=numbers.map((element)=>Math.pow(element,3));
const evenNums=numbers.filter((element)=>element %2===0);
const oddNums=numbers.filter((element)=>element %2!==0);
const total=numbers.reduce((accumulator,element) => accumulator+element);


console.log(total);



