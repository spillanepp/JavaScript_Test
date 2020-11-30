const fileSystem = require("fs");
fileSystem.writeFileSync("helloWorld.txt","Hello World!");
console.log("The file helloWorld.txt has been created.");

// Load library
var howManyPizza = require('how-many-pizza');

// Calculate pizzas for 50 people
console.log(howManyPizza(50)); // => 19

// Calculate pizzas for 50 people
// 4 slices per person and pizzas of 12 slices
console.log(howManyPizza(50, 4, 12)); // => 17
