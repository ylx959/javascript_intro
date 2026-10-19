//constructor

function Car(make,model,year,color,fly){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.fly=fly,
    this.drive=()=>console.log(`You drive the ${this.model}`),
    this.can_fly=()=>this.fly ? console.log(`My car can fly`):console.log('Just a normal car')
}

const car1=new Car("Ford","Mustang",2024,"red",false);
const car2=new Car("Benz","GT300",2022,"white",true);
// if(car1.fly){
//     console.log(`My car can fly`);
// }
// else{
//     console.log('Just a normal car')
// }

car1.drive();
car1.can_fly();
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);