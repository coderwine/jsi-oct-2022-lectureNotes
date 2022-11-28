/* 
! DOM
    - Document Object Model
    - Only through the browser

    Frame:
        - Document: HTML page
            - Is a global variable.
        - Object: Elements and comments (nodes)
        - Model: Arrangement

    - Data representation of objects that comprise the structure and content of a document on the web.

    Basic Structure:
    - Document
        - HTML
            - Head
                - meta
                - link
                - title
            - Body
                - nav
                - headers
                - divs
                - and any of their attributes.

*   BOM
        - Browser Object Model
        - Window variable that we can gain access.
        - various methods available.
*/

function askForStuff() {
    let answer = prompt("As a question");

    console.log(answer);

}

// askForStuff();

//* document variable
console.log(document);
console.log(document.URL);
console.log(document.location);

// const i = 0;

// let x = 0;
// if(true) {
//     let x = 4;
//     for(let i = 1; i <= 3; i++) {
//         console.log('index: ', i);
//         x++;
//         console.log('X: ', x);
//         // location.reload();
//     }
// }

// console.log(x);

console.log(document.title);
document.title = 'DOM Lesson Updated';

//! Creating First Element
let h1 = document.createElement('h1');
console.log(h1);

/* 
    Our variable now has access to our various properties.
        - innerHTML: can inject a block of HTML.
        - innerText: returns the visible text contained in a node.
        - textContent: return the full text.
            ex: 
                <p>Hello <b>World</b></p>
            ~ innerText: return "Hello"
            ~ textContent: returns "Hello World"
*/

h1.innerText = 'Creating my first DOM element!';

/* 
    Chain of Events:
        1. Create our element
        2. Apply our value
        3. Place our element
*/

console.log(document.body);
document.body.appendChild(h1);

h1.style.color = 'blue';
h1.style.textAlign = 'center';

let color = 'green';
h1.style = `
    color: ${color};
    text-shadow: 2px 2px 2px yellow;
    text-align: center;
`;

h1.className = "h1-class-name";
// JS requires camelCasing as "class" is a keyword that means something different.
h1.id = 'set-id';
h1.setAttribute('name', 'Dom Element');

//! Finding Elements
/* 
    HTMLCollection
        - An array-like Object
        - Allows access to index, properties, and methods to help navigate and modify.
        - Does NOT allow to modify a group of elements all at once.
        - Can use .length property to get the size of the list.

        To Get Element
        - use array notation
        - use .item() method

        Accessing Multiple Elements requires these methods:
            - getElementsByTagName()
            - querySElectorAll()
            - getElementsByClassName()
*/

let li = document.getElementsByTagName('li');
console.log(li);

let bathroom = li[0];
bathroom.style.color = 'red';

// li.style.color = 'yellow';
for(i of li) {
    // console.log(i);
    i.style.color = 'blue';
}

/* 
*   .querySelector()
        - Grabs frist instance of an element or null if nothing is found.
        - can target by ID, Class, or Element
            - will need to include # for ID
            - will need to inlcude . for Class
                ex: .querySelector('#idName');
*/

let firstLi = document.querySelector('li');
console.log(firstLi);

let toDoList = document.querySelector('#listTitle');
console.log('querySelector(#): ', toDoList);
toDoList.style.textAlign = 'center';

/* 
*   .querySelectorAll()
        - Returns a static nodeList (an array) list of elements.
        * static: will not update
*/

let nodeListLi = document.querySelectorAll('li');
console.log('querySelectorAll(): ', nodeListLi);

//* static example
let newListItem = document.createElement('li');
let ul = document.getElementById('ulToDo');
console.log(ul);

newListItem.innerText = "New Item";
ul.appendChild(newListItem);
console.log(li);

//* getElementsByClassName('className');

let liClass = document.getElementsByClassName('listItem');
console.log('ByClassName: ', liClass);

//! Event Listeners
/* 
    Allows us to execute a function when an event occurs.

    .addEventListener("event", cbFunction);
        - DOM node method
        - requres an event to "listen for" or type and a callback function.
*/

let btn = document.getElementById('submit');
let btnNode = document.getElementsByTagName('button');
console.log(btnNode); // see all the node properties available.

// btn.addEventListener("click", event => {
//     console.log(event);
//     console.log(`Someone clicked the button!`)
// });

/* 
*   Adding an item to the list
    Steps:
        1. Capture the input
        2. Access the parent element
        3. Create a new element (li)
        4. Assign value to attributes
            - "text value from input"
        5. Append to parent element (ul)
*/

btn.addEventListener('click', addItem);

let input = document.getElementById('listInput');
let nodeInput = document.getElementsByTagName('input');

function addItem() {

    //* Capture the Input Value
    // console.log(nodeInput); // viewing node
    console.log(input.value);

    //* Parent element already listed in global state.

    //* Create new element
    let newItem = document.createElement('li');

    //* Assign Value to Element
    newItem.textContent = input.value;

    //* Append to Parent Element
    ul.appendChild(newItem);
    input.value = '';
}

// Global Variables
let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');

// mock data
const colorList = [
    'red','blue','green','purple','yellow','orange'
];

// Function to build and display
const buildTable = () => {
    
    colorList.forEach((color, i) => {
        // console.log(color);

        // create elements
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        // assign value to properties
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `
            Item <u><b>${i}</b></u> in my list.
        `
        div.id = `Color_${i}`;

        // set to parent element
        div.appendChild(h2);
        div.appendChild(p);
        shellDiv.appendChild(div);
    })

    shellDiv.style = `
        display: flex;
        align-items: space-around;
    `
}

// Event Listener
buildBtn.addEventListener('click', buildTable);