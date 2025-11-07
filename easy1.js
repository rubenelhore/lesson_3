// Question 2

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsQuestionMark (stringLine) {
    return stringLine[stringLine.length - 1] === '!';
}

firstString = endsQuestionMark(str1);
secondString = endsQuestionMark(str2);

console.log(firstString);
console.log(secondString);


// Question 3

//let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

//let hasKey = "Spot" in ages; 

//console.log(hasKey);
//console.clear();

// Question 4

let munstersDescription = "the Munsters are CREEPY and Spooky.";

let begginning = munstersDescription[0].toUpperCase();
let end = munstersDescription.slice(1).toLowerCase();

console.log(begginning + end);
console.clear();

// Question 5

console.log(false == '0');
console.log(false === '0');
console.clear();

// Question 6

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

for (const [key, value] of  Object.entries(additionalAges)) {
    ages[key] = value;
}

console.log(ages);
console.clear();

// short answer: console.log(Object.assign(ages, additionalAges));

// Question 7

let str11 = "Few things in life are as important as house training your pet dinosaur.";
let str22 = "Fred and Wilma have a pet dinosaur named Dino.";

let word = 'dino';

console.log(str11.toLowerCase().includes('dino'));

console.log(str22.toLowerCase().includes('dino'));
console.clear();

// Question 8  & 9 

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino', 'Hoppy');

console.log(flintstones);
console.clear();

// Question 10

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.slice(0, advice.indexOf('house')));

// Expected return value:
// => 'Few things in life are as important as '