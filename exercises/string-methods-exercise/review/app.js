var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var newVeggies = vegetables.pop();
// console.log(newVeggies)
// console.log(vegetables)

var newFruit = fruit.shift();
// console.log(newFruit)
// console.log(fruit)

var new2Fruit = fruit.indexOf("orange");
// console.log(new2Fruit)
// console.log(fruit)

var new3Fruit = fruit.push(1);
// console.log(new3Fruit)
// console.log(fruit)

// console.log(vegetables.length);
var new2Veggies = vegetables.push(3);
// console.log(vegetables);

var food = fruit.concat(vegetables);
// console.log(food);

var newfood = food.splice(4,2);
console.log(newfood);
console.log(food);


