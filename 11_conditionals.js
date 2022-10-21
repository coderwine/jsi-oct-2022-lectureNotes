/*
! Conditionals
- Evaluates an expression and responds if it is true.
- Falsy:
    - false
    - 0
    - empty string
    - null
    - undefined
    - NaN
*/

//! IF Statement
let isOn = true;

if (isOn == true) {
    console.log('The light is on!');
};

/*
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

if(isOn) {
    console.log('Its sill on!')
}

isOn = false;

if(isOn == false) {
    console.log('The light is off');
}

//! If/Else Statement
let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket.');
} else {
    console.log('No need for a jacket.');
}

//! And
let rain = false;

if(weather < 70 && rain) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket is needed.');
}

//! Or 
if(weather > 70 || rain) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket is needed.');
}

//! Not
if(!rain) {
    console.log('Seems to be clear');
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

//? Solution
let name = 'Sam';

if ('Sam' == name) {
    console.log('Hello, my name is', name + '!');
} else {
    console.log('Hello, is your name', name + '?');
}

//! Else/If Statements
let grade = 88;
grade = 73;
grade = 0;

if(grade >= 75) {
    console.log('passing!');
} else if(grade >= 69) {
    console.log('please see the teacher');
} else {
    console.log('failing');
}

//! Switch
/*
    - Break
        This will stop the execution of more code or case testing inside of the code block.
    - Default
        There can only be one. 
        Specifies some code to run if there are no cases that match.
*/

let officeCharacter = 'Pam';
officeCharacter = 'Dwight';

switch(officeCharacter) {
    case "Michael": 
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log('Perfectenschlag');
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

//? Solution
let dessert = 'carrots';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('Not on the menu.');
}

let num = -4;

switch(true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
}

//! Ternaries
let newNum = 6;

// ex:
(newNum > 0) ? console.log('yes') : console.log('no');

// sample if/else
if(newNum > 0) {
    console.log('yes');
} else {
    console.log('no');
}

//else if
if(newNum == 0) {
    console.log('hello');
} else if (newNum < 0) {
    console.log('hi');
} else {
    console.log('goodbye');
}

newNum == 0 ? console.log('hello') : newNum < 0 ? console.log('hi') : console.log('goodbye');

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'

    Write a ternary that does the same thing as the age challenge
*/

//? Various solutions:
let age = 30;

if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything fun.");
}

//Greater than or equal to in ascending order

if (age >= 18) {
    console.log("Yay! You can vote!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else {
    console.log("you're too young to do anything fun")
}

//Less than in ascending order

if (age < 18) {
    console.log("you're too young to do anything fun")
} else if (age < 21) {
    console.log("Yay! You can vote!");
} else if (age < 25) {
    console.log("Yay! You can drink!");
} else {
    console.log("Yay! You can rent a car!")
}

//? Ternary

let myAge = 10;

(myAge >= 25) ? console.log('Yay! You can rent a car!') : (myAge >= 21) ? console.log('Yay! You can drink!') : (myAge >= 18) ? console.log('Yay! You can vote!') : console.log("Sorry, you're too young to do anything fun.");