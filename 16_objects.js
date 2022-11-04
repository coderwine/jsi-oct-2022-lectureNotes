let marvelHero = {
    fullName: 'Peter Parker',
    codeName: 'Spider-Man',
    age: 25,
    active: true
}
/*
    - Object Literal
        When our values are written within our keys. (hard coded)

    * Structure

        keyword objectName = {
            key: value,
        }

        - keys are consider like strings.

*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "seasons one": [
            {
                title: 'Simpsons Roasting on an Open Fire',
                aired: '1989-12-17',
            },
            {
                title: 'Bart the Genius',
                aired: '1990-01-01',
            },
        ],
        "season two": [/*... */],
        "season three": [/*... */],
        // etc.
    },
    currently_running: false,
}

let genre = 'genre'; // variable being used for 3rd example.

console.log(theSimpsons.genre); // dot notation - targeting key
console.log(theSimpsons['genre']); // needs a string
console.log(theSimpsons[genre]); // expecting a variable

console.log(theSimpsons.seasons["seasons one"]);

theSimpsons.characters = [
    'Homer', 'Marge', 'Bart', 'Lisa', 'Maggie'
];
console.log(theSimpsons);

theSimpsons.characters.push('Ned Flanders');
console.log(theSimpsons.characters);

console.log(theSimpsons.currently_running);
theSimpsons.currently_running = true;
console.log(theSimpsons.currently_running);

theSimpsons.seasons["seasons one"][1].aired = '1990-01-14';
console.log(theSimpsons.seasons["seasons one"][1].aired);

//! Methods
// Object.keys();
console.log(Object.keys(theSimpsons));
console.log(Object.keys(theSimpsons.seasons));

// Object.values()
console.log(Object.values(theSimpsons));

// Object.create()
const futurama = Object.create(theSimpsons);
// console.log(futurama);
futurama.id = 2;
futurama.est = 1999;
console.log(futurama);

// delete object.key
futurama.currently_running = false;

console.log('BEFORE: ', Object.keys(futurama));
delete futurama.currently_running;
console.log('AFTER: ', Object.keys(futurama));

//? SIDE CHALLENGE - In class project
let newObj = {
    one: 'test1',
    two: null,
    three: null,
    four: 'test2',
};

function removeKeysIfNull(obj) {
    let resetObj = {}

    for(const k in obj) {

        if(obj[k] != null) {
            resetObj[`${k}`] = obj[k];
        }
        
    }

    return resetObj;
}

let results = removeKeysIfNull(newObj);
console.log(results);
//? -------------------------------------

//! Object Destructuring
const { characters, seasons } = theSimpsons;
console.log('DEST: ', characters);
console.log('DEST: ', seasons);

characters.push('Meo');
console.log(characters);
characters[6] = 'Moe';
console.log(characters);

const { est: established, currently_running: on_air} = theSimpsons;
console.log('Established: ', established);
console.log('On Air: ', on_air);

//! Spread with Objects
const simpsonsCharacters = {
    simpsonsHouse: ['Homer', 'Marge','Bart','Lisa','Maggie'],
    moesTavern: ['Moe', 'Barney'],
}

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish',
}

const location = {
    ...simpsonsCharacters,
    dmv: ['Patty','Selma'],
    ...generalLocations,
}

console.log(location);

// Mock Hulu Object
/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an iteger
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/