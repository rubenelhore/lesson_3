// QUESTION 1

/*
Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
*/

let word = 'important';

let newWord = 'urgent';

let advice = "Few things in life are as important as house training important your pet dinosaur.";

let wordIsPresent = false;

let newAdvice = '';

newAdvice = advice.replaceAll(word,newWord);

console.log(newAdvice);
console.clear();

// QUESTION 2

/*
let numbers11 = Object.freeze([1, 2, 3, 4, 5]);
let numbers211 = Object.values(numbers11);
numbers211.reverse(); // con reverse!
console.log(numbers11); 
console.log(numbers211);

let numberss11 = Object.freeze([1, 2, 3, 4, 5]);
let numberss211 = Object.values(numberss11);
numberss211.sort((a, b) => b - a); // con sort!
console.log(numberss11); 
console.log(numberss211);

console.clear();
*/

// QUESTION 3

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  
let number2 = 95;


let case1 = numbers.includes(number1);
let case2 = numbers.includes(number2);

console.log(case1);
console.log(case2);

// QUESTION 4

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

console.log('Four score and '+ famousWords);

let firstFamousWords = "Four score and "

console.log(firstFamousWords.concat(famousWords));

// QUESTION 5

let arrayOfNumbers = [1, 2, 3, 4, 5];

arrayOfNumbers.splice(2,1)

console.log(arrayOfNumbers);
console.clear();

// QUESTION 6

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newArray = [];

flintstones.forEach(item => {
    if (Array.isArray(item)) {
        item.forEach (i => {
            newArray.push(i);
        })
    } else {
        newArray.push(item);
    }
});

console.log(newArray);
console.clear();


// QUESTION 7

let flintstone = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let smallArray = [];

Object.keys(flintstone).forEach(key => {
    if (key === 'Barney') {
        smallArray.push(key);
        smallArray.push(flintstone[key]);
    }
});

console.log(smallArray);
console.clear();

// super fast: Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

// QUESTION 8

let number = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(number));

console.log(Array.isArray(table));
console.clear();


// QUESTION 9

const title = "Flintstone Family Members";
// Center in 40 character wide

const CENTER_TITLE = Math.floor((40 - title.length)/2) + title.length;

const newTitle = title.padStart(CENTER_TITLE, "*");

const CENTER_TITLE2 = Math.floor((40 - title.length)/2)*2 + title.length;

const newTitleTitle = newTitle.padEnd(CENTER_TITLE2,"*");

console.log(newTitleTitle);
console.clear();

// QUESTION 10 - Write a one-line expression to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log((statement1.match(new RegExp("t", "g")) || []).length); 

console.log((statement2.match(new RegExp("e", "g")) || []).length); 