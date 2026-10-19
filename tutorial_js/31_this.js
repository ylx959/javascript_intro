//this

const person1={
    name:"Spongebob",
    favFood:"hamburgers",
    sayHello:function(){console.log(`Hi I am ${this.favFood}`)},

}

person1.sayHello();
console.log(this);