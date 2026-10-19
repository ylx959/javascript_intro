//Super Super

class Animals{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Rabbit extends Animals{

    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
}

class Fish extends Animals{
    constructor(name,age,swimSpeed){
        super(name,age);
       this.swimSpeed=swimSpeed;
    }
}

class Hawk extends Animals{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;
        }
}

const rabbit=new Rabbit("rabbit",2,20);
const fish=new Fish("fish",1,10);
const hawk=new Hawk("hawk",10,60);


console.log(rabbit.age);
console.log(rabbit.name);
console.log(rabbit.runSpeed);
