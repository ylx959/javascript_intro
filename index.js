//Super Super

class Animals{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}`);
    }
}

class Rabbit extends Animals{

    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animals{
    constructor(name,age,swimSpeed){
        super(name,age);
       this.swimSpeed=swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animals{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;
        }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit=new Rabbit("rabbit",2,20);
const fish=new Fish("fish",1,10);
const hawk=new Hawk("hawk",10,60);


console.log(rabbit.age);
console.log(rabbit.name);
console.log(rabbit.runSpeed);

fish.swim();
rabbit.run();
hawk.fly();

