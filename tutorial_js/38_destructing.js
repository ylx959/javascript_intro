// let a=1;
// let b=2;


// [a,b]=[b,a];

// const colors=["red","green","blue","white"];

// // [colors[0],colors[4],colors[4],colors[0]];

// const[firstColor,secondColor,thirdColor,...extraColors]=colors;

// console.log(firstColor);

function displayPerson({firstName,lastName,age,job="Unemployed"}){
    console.log(`Name:${firstName} ${lastName}`);
    console.log(`age:${age}`);
    console.log(`job ${job}`);
}

const persion1={
    firstName:"Spongebob",
    lastName:"SqauresPants",
    age:30,
    job:"Fry Cook",

}

const person2={
    firstName:"Spongebob",
    lastName:"SqauresPants",
    age:30,

}

// displayPerson(person1);
displayPerson(person2);