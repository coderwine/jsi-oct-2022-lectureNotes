/* 
! Async / Await
    - async: Defines our function as an async function
    - await: Details a process to "wait" for a result.

    - Introduce in ES8 in 2017
    - Can make any function an async function simply by denoting as such.
    - Can help us reduce the need for Callback functions.
    - CANNOT be used in loops!
    - ALWAYS returns a promise.
*/

// syntax
async function asyncFuncDeclaration() {
    // code block...
}

let funcExpression = async function() {
    // code block...
}

let arrowFunc = async() => {
    // code block...
}

async function getName() {
    return "Gandalf";
}

console.log(getName());
getName().then(d => console.log(d));

/* 
! Await
    - Tell JS that a promise is being returned and to wait on that result
*/

async function extraData() {
    // let info = returnData();
    let info = await returnData();

    return `${info} in some cloud!`;
}

extraData().then(d => console.log(d)); // comes back as undefined.