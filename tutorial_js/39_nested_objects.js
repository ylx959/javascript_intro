//nested object

// const person={
//     fulllName:"Spongebob",
//     age:30,
//     isStudent:true,
//     hobbies:["karate,jellyfishing","cooking"],
//     address:{
//         street:"124 Conch St.",
//         sity:"Birgig Bottom",
//         country:"Int .Water"
//     }

// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);

// console.log(person.address.street);
// console.log(person.address["street"]);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

const person1=new Person("SPongebob",30,"1234 Count St.",
                                        "bbb srt",
                                        "Int Waters"
);

const person2=new Person("Patrick",37,"123 St.",
                                        "Taipei",
                                        "Taiwan"
);

const person3=new Person("Patrick",37,"123 St.",
                                        "Taichung",
                                        "Taiwan"
);

console.log(person3.address.country);
console.log(person3.address["country"]);