//! Lookup Tables / Dictionary

const listGame = (system) => {

    // Dictionary
    let collection = {
        "Nintendo": ['Duck Hunt', 'The Legend of Zelda', 'Super Mario Bros.'],
        "Super Nintendo": ['Super Mario World', 'F-Zero', 'Star Fox'],
        Nintendo64: ['Super Mario 64', 'Mario Kart 64', 'GoldenEye 007'],
    }

    return collection[system];
};

console.log(listGame('Nintendo64'));
console.log(listGame('Nintendo'));

const stateAbbrivation = {
    alaska: 'ak',
    delaware: 'de',
    hawaii: 'hi',
    indiana: 'in',
    vermont: 'vt',
}

const acronyms = {
    asap: 'as soon as possible',
    fomo: 'fear of missing out',
    gif: 'graphics interchange format',
    lol: 'laugh out loud'
}

function findIt(dict, search) {
    return dict[search];
}

console.log(findIt(stateAbbrivation, 'indiana'));
console.log(findIt(acronyms, 'lol'));

//! State Machine

let state = {
    green: ['yellow'],
    yellow: ['red'],
    red: ['green','yield'],
    yield: ['red']
}

let currentState = 'green';

function enterState(newState) {
    let validTransition = state[currentState]; // Estabilish which point in our state object that we want to reference.

    if(validTransition.includes(newState)) { // Does our key include the state our user is attempting to change it to?
        currentState = newState; // Allow our state to change.
        console.log(currentState);
    } else {
        throw(`Invalid State: ${currentState} to ${newState}`)
    }

}

enterState('yellow');
enterState('red');
enterState('green');
// enterState('red'); // breaks code because of current state status