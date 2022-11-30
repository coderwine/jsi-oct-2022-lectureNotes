// Global Variables
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const btn = document.getElementById('submit-btn');
const table = document.querySelector('tbody');
let animals = [];

// const dogURL = 'https://dog.ceo/api/breeds/image/random';
// console.log(form);

// Class
class Animal {
    constructor(s, n, sex) {
        this.species = s;
        this.name = n;
        this.sex = sex;
    }
}

// Event Listeners
form.addEventListener('submit', e => {
    e.preventDefault();
    
    // console.log(form[0].value);
    // console.log(form[1].value);
    // console.log(form.name.value);
    // console.log(form.sex);
    // We are able to access a key of sex as it is tied to the "name" of our radio buttons. - We can target the "name" of our input fields to capture the value stored within it.

    let species = properCase(form.species.value,false);
    let name = properCase(form.name.value, true);
    let sex = form.sex.value;

    let animal = new Animal(species, name, sex);

    // console.log(animal);
    animals.push(animal);
    // console.log(animals);
    buildTable();

    form.reset();
    form.species.focus();
});


// Display Table
function buildTable() {
    // console.log(animals[0]);

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }

    animals.forEach((a,i) => {
        console.log(a);

        // let n = properCase(a.name, true);
        // let s = properCase(a.species, false);

        // create
        let tr = document.createElement('tr');
        let pos = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        // Add Attributes
        tr.accessKey = `animal-${i}`;
        pos.textContent = i + 1;
        name.textContent = a.name;
        // name.textContent = n;
        sex.textContent = a.sex;
        sex.style = `color: ${
            a.sex === 'male' ? 'blue' : 'red'}
            `;
        species.textContent = a.species;
        // species.textContent = s;
        h1.innerHTML = `
            Welcome, ${a.name}!
        `;
        body.style = `
            background-image: 
            ${
                a.species === 'cat' ?
                'url(https://loremflickr.com/320/240/kitten)' : 
                'url(https://loremflickr.com/320/240/dog)'
            };
            background-size: cover;
        `

        // Append
        tr.appendChild(pos);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })

}

function properCase(text, bool) {

    let checked = '';

    if(bool) {
    
        for(t in text) {
            // console.log(text[t]);
            // console.log(t);
            if(t === '0') {
                // console.log(text[t]);
                checked += text[t].toUpperCase();
                // console.log(checked)
            } else {
                // console.log(text[t]);
                checked += text[t].toLowerCase();
                // console.log(checked)
            }
            console.table(checked);
        }

    } else {

        for(t in text) {
            checked += text[t].toLowerCase();
        }

    }
    // console.log(checked);

    return checked;
    
}