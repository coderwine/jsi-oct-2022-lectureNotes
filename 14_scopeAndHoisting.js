//! Scope

let x = 12;

function scope() {
    let x = 33;
    console.log(x); // Returns local variable "x"
}

scope(); 
console.log(x); // Returns global variable "x"

let y = 10;

function scope2() {
    y = 20;
    console.log(y);
}

scope2();
console.log(y);

/*
    Variable Keywords:
        - Const: cannot be reassigned.
        - Var: Scoped to nearest funciton block.
        - Let: Scoped to the nearest enclosing block.
*/

//* Var
var a = 12;

function varTest() {
    var a = 33;

    if(true) {
        var a = 45;
        console.log(`Var - Within If: ${a}`);
    }

    console.log(`Var - Outside If: ${a}`);
}

varTest();
console.log(`Var - Outside Function: ${a}`);

//* Let
let b = 12;

function letTest() {
    let b = 33;

    if(true) {
        let b = 45;
        console.log(`Let - Within If: ${b}`);
    }

    console.log(`Let - Within Function: ${b}`);
}

letTest();
console.log(`Let - Outside Function: ${b}`);

/*
!   Hoisting
        - JS reads from top to bottom in 2 passes
            - 1st pass:
                - Made by the compiler. This is where hoisting is initiated.
                - Compiled for execution.
            - 2nd pass:
                - Variables are assigned
                - Executes any hoisted code.
*/

// console.log(newName); // Error - value isn't assigned until the 2nd pass
let newName = 'Everly'; // Value doesn't get hoisted.

hoistedFunction(); // Doesn't break because function has been hoisted to the top.

function hoistedFunction() {
    console.log('I have been hoisted!');
}

// notHoisted();

let notHoisted = function() { 
    console.log('Not hoisted!');
}