/*
!   Arrays
        - Denoted with Square Brackets [ ]
        - Indices started at zero.
*/

let list = ['milk', 'bread','chicken','coffee'];
//             0       1        2         3      

console.log(list[2]);
console.log(list.length);

list[0] =  'chocolate milk';
console.log(list);

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', ['Tony', 8, true]
];

console.log(typeof avengers);
console.log(avengers instanceof Array);

/*
Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interpolation, return "Hello, Nick" and "Hello, Tony".
*/

let hi = 'Hello';

console.log(avengers[4]); // returns Bruce
console.log(avengers[5][2]);
console.log(`Hello ${avengers[0]}!`);
console.log(`Hello ${avengers[5][0]}!`);
console.log(`${hi} ${avengers[3]}!`);

//! Methods
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

for(item of food) { console.log(item) };

food.push('Pizza'); // adds a value to the end of the array.
console.log('Push: ', food);

food.splice(1,1,"Tacos"); // (index, qty removed, new value)
console.log('Splice: ', food);

food.splice(1, 0, 'Steak');
console.log(food);

food.pop();
console.log('Pop: ', food);

food.shift();
console.log('Shift: ', food);

food.unshift('Hamburger', 'Salad');
console.log('Unshift: ', food);

let rgb = ['red','green','blue'];
console.log(rgb.toString());
console.log(typeof rgb);
console.log(typeof rgb.toString());

let randomArr = [1,2,3];
let selection = randomArr[2].toString();
console.log(selection, typeof selection);

let turnToNumber = "2";
let changeToNumber = Number(turnToNumber);
console.log(changeToNumber, typeof changeToNumber);

//* Interation Methods

let newFoodList = [
    'apple', 'pear', 'mushrooms', 'cheese', 'peach'
];

for(let i = 0; i < newFoodList.length; i++) {
    console.log(newFoodList[i]);
}

newFoodList.forEach(item => console.log('forEach: ', item));
newFoodList.forEach((item, i) => {
    // console.log('Item: ', item);
    // console.log('Index: ', i);
    if(i % 2 === 0) {
        console.log('Even: ', item);
    } else {
        console.log('Odd: ', item);
    }
})

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = [
    'The Shining', 'The Terminator', 'Ice Age', 'My Big Fat Greek Wedding'
];

movies.forEach(movie => console.log(movie));
movies.push('Rat Race');
movies.splice(1,1, 'The Terminator 2');
movies.forEach(movie => console.log(movie));

let tmnt = [
    'Mikey','Donnie','Leo','Raph','Splinter','Shredder','Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c === character));

character = 'April';
console.log('Find: ', tmnt.find(c => c === character));

character = 'Splinter';
tmnt.find((c, i) => console.log(c === character, "index: ", i));

let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) numArray.push(i);

numArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x);
})

console.log(fizzBuzzArray);

//! Destructuring, Spread, and Rest

const fullName = ['Jane', 'Doe'];
// const firstName = fullName[0];
// const lastName = fullName[1];

const [firstName, lastName] = fullName;

console.log(firstName);
console.log(lastName);

/*
* Spread Operator
    Concept of the Spread Operator - NOT syntax

    const fullname = ['Rocket', 'Racoon'];

    ...fullName // 'Rocket', 'Racoon'

    const element = ...fullName;
    const element = 'Rocket', 'Racoon'
*/

const copiedFullName = [...fullName];
console.log('Copied Array', copiedFullName);
// const copiedFullName2 = [fullName];
// console.log('Copied Array2', copiedFullName2);

fullName.push('Mrs');
console.log(fullName, copiedFullName);

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 5.59];
// console.log(Math.min(prices));
console.log(`$${Math.min(...prices)}`);

// Spread operator helps us obtain standalone values that we can use with methods or functions.

const persons = [
    { name: 'Jane', age: 28}, { name: 'John', age: 35}
];

const copiedPersons = [...persons];
persons.push({name: 'Anna', age: 29});

console.log(persons, copiedPersons);

let x = 10;
let y = 'abc';
let z = null;

let a = x;
let b = y;

a = 5;
b = 'xyz';

console.log(x, y, a, b);

let arr = [];
arr.push(1);

let reference = [1];
let refCopy = reference;

//* Rest

const newPerson = ['Jane', 'Doe', 'Mrs.', {month: 03, date: 22, year: 1973 }];

// const [fName, lName, ...otherInfo] = newPerson;
// console.log(fName);
// console.log(lName);
// console.log(otherInfo);
const [fName, lName, ,...otherInfo] = newPerson;
console.log(fName);
console.log(lName);
console.log(otherInfo);

//Rest MUST be at the end with array destructing.
