/* 
! Promises
    - A tool within JS that allows us to request data from elsewhere.
    - 3 Main States:
        - Pending
        - Fulfilled
        - Rejected
*/

// Mock internet send
// function getData() {
//     setTimeout(() => {
//         return 'some data';
//     }, 3000);
// }


// let data = getData(); // the value come "late" - 3 seconds
// console.log(data); // We get an undefined because the information is delayed when it is compiled.

function getData(cb) {
    setTimeout(() => {
        cb("some data");
    }, 3000);
}

getData(data => console.log(data));
console.log("hello world");

/* 
!   Promises
    A promise is an object that may produce a singular value in the future.

    - Accepts 2 required parameters
        - Resolved
        - Rejected
            - These detail what to do depending on the results.
*/

function returnData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve('some data from Promise');
            } else {
                reject('This is a rejection');
            }
        })
    })
}

console.log(returnData());

/* 
* Resolvers
    .then() - if success
        - can be chained together.
    .catch() - if error

    - Take in callback functions

    - When returned, the returnData() func. will return a Promise instead of a given string.

    - only put a semicolon (;) after the last resolver.
*/

returnData()
    .then(data => console.log('From Response: ', data))
    .then(() => {
        let x = 10;
        let y = 20;
        console.log(x + y)
    })
    .catch(error => console.error(error));

    /* 
        The Process:
            - Creating a new Promise
                - resolve / reject are parameters of a callback function.
            - setTimeout is acting as our "waiting" for a resource.
            - resolve() or reject() said promise
            - When returned, returns a Promise - NOT a string.
            - use of resolvers (.then() / .catch()) with CB to extrapolate the info from said Promise.
    */
