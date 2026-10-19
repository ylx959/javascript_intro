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
}

class Fish extends Animals{
    name="fish";
}

class Hawk extends Animals{
    name="hawk";
}

const rabbit=new Rabbit();
const fish=new Fish();
const hawk=new Hawk();

rabbit.alive=false;
rabbit.eat();
rabbit.sleep();