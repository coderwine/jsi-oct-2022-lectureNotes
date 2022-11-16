/*
!   Input/Output I/O

    - Our actions are typically the input into the computer
        - keystrokes, mouse clicks, etc.
    - A computers response is the output.
        - printing, sounds, etc.
    - CPU and RAM process these actions
        - All other parts of a computer would be consider the i/o
        - keyboard, mouse, monitor, headphones, etc.
*/

//* Standard In / Standard Out
// Working with i/o in the terminal.

console.log('What would you like to say?'); // providing a "call to action"

// 1      2      3    4        5
// process.stdin.once('data', input => {
//     //   6
//     console.log('stdin: ', input.toString());
//     console.log('stdin: ', input);
// });

/* 
    1. targeting our process (node)
    2. We have access to a property within our process. (stdin)
    3. A method within the property. Requires two parameters, type to listen for, and a callback function.
    4. Determining what type of input we are expecting
    5. Fires off a callback function to handle what we do with that input.
    6. The code block of our function. 
*/

// process.stdin.once("data", callbackFunc); // Commented out so we can run our code.
// process.stdin.once("data", callbackFunc()); // throws error


function callbackFunc(input) {
    console.log(`New Input: ${input}`);
}

//            1                 2
function willUseCallBack(expectingFunction) {
    expectingFunction(); // 3
}

//4
willUseCallBack(() => console.log('Being passed into the parameter of "willUseCallBack"'));
willUseCallBack(() => console.log('Different Info now'));

/*
    1. The name of our function that we are running
    2. The parameter of our "event listener" function
    3. Because we know that our parameter will be a function, we are able to "invoke" it by "name" (which is the parameter name now)
    4. Invoking our mock "event listener".
*/

//Quick Sample
let firstName = "Frodo";
let lastName = "Baggins";

let fName = "Gandalf";
let sName = "the Grey";

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function hobbit(first, last) {
    let fullName = getFullName(first, last);
    console.log(`${fullName} is a hobbit`);
}

function wizard(first, last) {
    let fullName = getFullName(first, last);
    console.log(`${fullName} is a wizard`);
}

hobbit(firstName, lastName);
wizard(fName, sName);

//process.exit()
// process.stdin.once('data', exitProcess) // commenting out to run stdin.on()

function exitProcess(input) {
    console.log(`${input.toString().trim()}... have a good day.`);
    // trim allows us to keep our string on one line.
    console.log('Ending program');
    process.exit();
    // Ends our process after running our code.
}

//* stdin.on()
console.log("Let's play a game...");

process.stdin.on("data", input => {
    let userInput = input.toString().trim();

    if(userInput === 'end') {
        console.log("Closing Program");
        process.exit();
    } else {
        console.log(`The Machine Echoes: ${userInput}`);
    }

});
