// This is a comment

/* This is a multiline
comment */

console.log("hello world");


// Variables - named storage

// We need variables to store information
// We can use let or const to declare a variable

// let variables can be declared as undefined and overwritten later
// When you log variables, it is a good idea to add a description
let username;
console.log("this is the username: ", username);

username = "matias";
console.log("this is the username: ", username);

username = "antonio";
console.log("this is the username: ", username);

// You use camel case as case style for JavaScript variables
let ironhackStudent = "johannes";

// JavaScript is dynamically typed, type can change
username = 42;
console.log(username);

// const variables cannot be overwritten
// We should use const whenever possible, let should be the exception
const favoriteDrink = "soda";
console.log(favoriteDrink);


// Data types

// primitives and objects
// Primitives: number, string, boolean, null, undefined, symbol

// We can check the type by using "typeof"

let num = "42";
console.log(typeof num);
num = 23;
console.log(typeof num);

// Number

// Integers
const distance = 7000;

// Floating point numbers
const price = 19.99;

// Mathematical operators
// +, -, *, /
console.log(50 * 30 - 10)


// Advanced operators

// Modulo (%): Returns the remainder
console.log(5%2) // evaluates to 1

// Assignment operators

// myAge +=5 is the equivalent to myAge = myAge + 5
let myAge = 25;
myAge += 5;
console.log(myAge);

// myAge++ is the equivalent to myAge = myAge + 1
myAge++
console.log(myAge);

// myAge-- is the equivalent to myAge = myAge - 1
myAge--
console.log(myAge);

// NaN represents a computational error
console.log("hello" * 3);

// Rounding

// Math.floor rounds down
console.log(Math.floor(price));

// Math.ceil rounds up
console.log(Math.ceil(price));

// Math.round rounds to the nearest integer
console.log(Math.round(price));

console.clear();

// Strings

// You can use "" (double quotes), '' (single quotes) or `` (backticks) to create a string
username = "matias";
username = 'matias';
username = `matias`;

// concatenate strings
// With backticks, we can use interpolation to embed variables inside a string
const greeting = "hello";
console.log(`${greeting} ${username}`)

// the "oldschool way" of concatenating strings
console.log(greeting + " " + "antonio");

// String properties and methods

// Return the length of a string
console.log(username.length);

// Find a character in a string
console.log(username[0]);
console.log(username[username.length - 1]);
console.log(username.charAt(4));

// indexOf() returns the first occurence of a character
console.log(username.indexOf("a"));
console.log(username.indexOf("at"));

// lastIndexOf() returns the last occurence of a character
console.log(username.lastIndexOf("a"));

// Check if a character is included in a string
console.log(username.includes("at"));

// slice() returns a substring within a given range
let message = "Trust the process";
console.log(message.slice(0, 5));

// toUpperCase() changes a word to upper case
// But: Strings (and all other primitive values) are immutable
// The values itself cannot be ChannelMergerNode, but the variables can be reassigned
console.log(message.toUpperCase());
message = message.toUpperCase();
console.log(message);

// username = "matias"
// How can we transform "matias" to "Matias"?
console.log(username[0].toUpperCase() + username.slice(1));

console.clear();

// Booleans, undefined and null
// A boolean expression can result in the value of true or false

// Boolean operators:
// > larger
// < smaller
// >= larger equal
// <= smaller equal
console.log(4 > 5); // false

// Equality
console.log(4 === 4); // true
console.log(4 == 4); // true
console.log("4" === 4); // false

// && logical and
// If both expressions are true, the result will be true
console.log(true && true);
console.log(true && false);

// || logical or
// If one of the expressions is true, the result is true
console.log(true || false);
console.log(false || false);

// ! not
// not-operator negates the value of an expression
console.log(!true); // false

// What is the result of this expression? 
console.log(5 > 3 || false);

// undefined and null
// undefined is automatically assigned to a variable when it is declared
// The unintentional absence of a value
let number;
console.log(number);

// null is often used to represent unknown values
// null is the intentional absence of a value
number = null;
console.log(number);

// Truthy or falsy values evaluate to true or false
// Truthy: true, "string", "0", 35
// Falsy: false, 0, null, "", undefined, NaN

// Conditionals
// If else statement
const age = Number(prompt("Welcome to Ironhack cinema. How old are you?"));
console.log(age);

if (age <= 16) {
    console.log("You have a teenager discount.");
} else if (age >= 65) {
    console.log("You have a senior citizen discount");
} else if (isNaN(age)) {
 console.log("this is not a number, sorry!")
} else {
    console.log("Sorry, you don't have any discount 😥");
}

// Switch case
// If we have too many if else statements, then its better to use a switch statement
const language = "english";

switch (language) {
    case "french":
        console.log("bonjour");
        break;
    case "english":
        console.log("hello");
        break;
    default:
        console.log("non recognized language");
}

// Loops + iterations

// for loop: Loop the numbers from 1 to 10
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// while loop
let i = 1;
while (i < 11) {
    console.log(i);
    i++;
}

// More common use for a while loop
const correctPassword = "123456789";
let password = prompt("Enter the password");
let amountOfAttempts = 0;
while (password !== correctPassword && amountOfAttempts < 3) {
    password = prompt("Enter your password");
    amountOfAttempts++;
}

// This line is reached if the password is correct
alert("Access granted!");
