
class Preson{
    constructor(firstName,lastName,age){
        this.firtName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    set firstName(newFirstName){
        if( typeof newFirstName==="string" && newFirstName.length>0){
            this._firstName=newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if( typeof newLastName==="string" && newLastName.length>0){
            this._lastName=newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName+" "+this._lastName;
    }
}

const person=new Person(420,69,5);

person.firstName="Yang";
person.lastName="LinHsuan";


console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullname);


// class Rectangle{
//     constructor(){
//         this.width=0;
//         this.height=0;
//     }

//     set width(newWidth){
//         if(newWidth>0){
//             this._width=newWidth;
//         }
//         else{
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight>0){
//             this._height=newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }
// }


// const rectangle=new Rectangle();

// rectangle.width(-1);
// rectangle.height(100);