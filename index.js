//object

const person1={
    firstName:"Spongebob",
    lastName:"Squarepants",
    age:30,
    isEmployed:true,
    sayHello: function(){console.log("Hi ! I am Spongebob !")},
    sayBye:function(){console.log("Goodbye !")}
};

const person2={
    firstName:"Patrick",
    lastName:"Star",
    age:42,
    isEmployed:false,
    sayHello:()=>console.log("Hey I'm Patrick"),
    sayBye :function(){console.log("Bye...")}
};

console.log(person1.firstName);
console.log(person2.firstName);

//5:04:20