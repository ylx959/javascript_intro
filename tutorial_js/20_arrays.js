//array 

let fruits=["apple","orange","banana"];


// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
//  fruits.shift();

// let numOfFruits=fruits.length;
// let index=fruits.indexOf("apple");

fruits.sort().reverse();

for(let i=0;i<fruits.length;i+=2){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}


console.log(numOfFruits);