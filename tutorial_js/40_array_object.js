const fruits=[{name:"apple",color:"red",calories:95},
                {name:"orange",color:"orange",calories:45},
                {name:"banana",color:"yellow",calories:123},
                {name:"coconut",color:"white",calories:33},
                {name:"pineapple",color:"yellow",calories:44},
];

fruits[0].name;

fruits.push({name:"grapes",color:"purple",calories:63});

fruits.pop();

//for each()
fruits.forEach(fruits=>console.log(fruits.color));

//map
const fruitNames=fruits.map(fruit=>fruit.name);
const fruitColor=fruits.map(fruit=> fruit.color);
const fruitCalories=fruits.map(fruit=> fruit.calories);

//filter

const yellowFruits=fruits.filter(fruit =>fruit.color==="yellow");
const lowcalFruits=fruits.filter(fruit =>fruit.calories<100);

console.log(yellowFruits);
console.log(lowcalFruits);

//reduce
const maxFruit=fruits.reduce((max,fruit)=>fruit.calories>max.calories ? fruit:max);
const minFruit=fruits.reduce((min,fruit)=>fruit.calories<min.calories ? fruit:min);
console.log(maxFruit);