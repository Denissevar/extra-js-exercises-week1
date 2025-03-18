/** Exercise 1: c reate a variable called Mynname and assing ita string value. Log the variable to the console*/

let myName = "Denisse";
console.log(myName);

/** Exercise 2: Create a variable called `myAge` and assign it a number value. Log the variable to the console. */


let myAge = 37;
console.log(myAge);

/** Exercise 3: Create a variable called `myHobbies` and assign it an array of string values. Log the variable to the console. */

var myHobbies = ["Jugar Sudoku", "Ver Netflix", "Salir a correr"];
console.log(myHobbies);

/** Exercise 4 Create a variable called `myDog` and assign it an object with properties of name, age, and breed. Log the variable to the console. */

var myDog = ["Moka", 3, "labrador"];
console.log(myDog);

/** exercise 5 


/** Exercise 6

Create a function called `sayHello` that takes in a name and logs the string "Hello, name". Call the function with the argument of your name. */

function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Denisse");

/** Exercise 7  Given the array of names, create a loop to use the sayHello function to log "Hello, name" for each name in the array. Use a for loop or a forEach loop to iterate over the array */

const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];

for (let i = 0; i < names.length; i++) {
    sayHello(names[i]);
}

