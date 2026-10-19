//inheritance

class Animals{
    alive=true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animals{
    name="rabbit";

    jump(){
        console.log(`This ${this.name} is jumping`);
    }
}

class Fish extends Animals{
    name="fish";
    swim (){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animals{
    name="hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit=new Rabbit();
const fish=new Fish();
const hawk=new Hawk();

// rabbit.alive=false;
// rabbit.eat();
// rabbit.sleep();

rabbit.swim();//fail
rabbit.run();