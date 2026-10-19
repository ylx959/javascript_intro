//In JavaScript, static defines a method or property that belongs to the class itself rather than its instances.

// class MathUtil{
//     static PI=3.14159;

//     static getDiameter(radius){
//         return radius*2;
//     }
//     static getcircumference(radius){
//         return 2 *this.PI*radius*radius;
//     }
//     static getArea(radius){
//         return this.PI *radius*radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getcircumference(10));
// console.log(MathUtil.getArea(10));


class User{
    static userCount=0;

    constructor(username){
        this.username=username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users on this webiste`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1=new User("John");
const user2=new User("Mary");
const user3=new User("Jack");


user1.sayHello();
User.getUserCount();