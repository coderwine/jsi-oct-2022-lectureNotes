/*
!   Functions
    - block of code that performs a particular task.
    - simplified programs that run a task when invoked.
    - Two types:
        - Declarations
        - Expressions
*/

/*
!   Function Declaration

        1     2
    function hi() {
        console.log('HI');
    }

    1 - Keyword
    2 - Name of the function. Parenthesis for the parameters.

    Gets hoisted.
*/

/*
!   Function Expression

        1
    let hey = function hi() {
        console.log('HI');
    }

    1 - The variable 'hey' is now representative of the function "hi"

    Doesn't get hoisted.
*/

function hi() {
    // console.log('Hi');
    return 'Hi, how are you?';
}

hi();
// console.log(hi());

//* Small Challenge
function counting() {
    let newNum;
    for(i=1; i <= 10; i++) {
        // console.log(i);
        newNum = i;
    }
    
    return newNum;
}

let num = 1
console.log(num);

// counting();
num = counting();
console.log(num);

/*
! Parameters
                1
    function hi(name) {
        console.log(`Hi, ${name}`);
    }                     2

        3
    hi('Bruce');

    1. The parameter(s) that the function is accepting or holding.
    2. Using string interpolation, we are referring back to our parameter.
    3. Where we are defining the value of our parameter (argument)
*/

function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}.`);
}

order('cheese pizza');
order('taco');

function myName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}.`);
    console.log(`Hello, my name is ${firstName} ${lastName}.`);

}

// myName('Bruce');
myName('Bruce', 'Wayne');


//? Challenge
/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalc(bill) {
    let tip = bill * 0.2;
    return tip.toFixed(2); // toFixed is the number of digits to appear after a decimal
}

let totalTip = tipCalc(19.72);
console.log(totalTip);


/*
!   Arrow Functions

    (1)        (2)
    let hi = () => {
        console.log('Hi');
    }

    1 - We need to set fat arrow functions within a variable.
    2 - We use the 'fat arrow' to signify that it is a function.

    - introduced with ES6. 
    - Concise way to write function expressions NOT declarations
    
    CAN'T be hoisted.

    - concise body
    - block body
*/

//* Concise Body
let hello = () => console.log('Hi');
hello();

//* Block Body
let goodbye = () => {
    return 'Goodbye';
}

console.log(goodbye());

//* Arrow Function Parameters
let apples = x => `There are ${x} apples!`;
console.log(apples(10));

let basket = (no, fruit) => `There are ${no} ${fruit}.`;
console.log(basket(7, 'pears'));

let basket2 = (no, fruit) => `There are an ${no % 2 == 0 ? 'even': 'odd'} number of ${fruit}.`;
console.log(basket2(4, 'bananas'));
console.log(basket2(3, 'apples'));