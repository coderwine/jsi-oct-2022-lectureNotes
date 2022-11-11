//! Object Oriented Programming
/*
    Core Concepts:
        - Encapsulated data and behavior through an exposed interface.
        - Allow for inhertiance of behavior via a PARENT class that can share methods.
        - Abstraction of complexity
        - Polymorphism of behavior
*/

//* Encapsulation
class Pet {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says, ${this.voice}`;
    }
}

class Dog extends Pet {
    constructor(name, sex, voice) {
        super(name, sex);
        this.voice = voice;
    }

    // speak() {
    //     return `${this.name} says, ${this.voice}`;
    // }

}

class Cat extends Pet {
    constructor(name, sex, voice) {
        super(name, sex);
        this.voice = voice;
    }
}

let mayo = new Cat('Mayo', 'male', 'mew');
console.log(mayo);
console.log(mayo.speak());
// let buttons = new Pet('Buttons', 'male');
let buttons = new Dog('Buttons', 'male', 'ruff!');
console.log(buttons.speak());
console.log(buttons);

// console.log(`${buttons.name} goes "woof!"`);
let frog = new Pet('Wart', '???', 'ribbit');
console.log(frog.speak());
console.log(frog);

//! CHALLENGE
/*
    - Create a bird class that extends pets.
    - Provide it a new key property called "flies" that will hold a boolean value.
    - Create a method within the parent class called "fly" that checks to see if our object can fly and returns as such:
        If so: "{pet} takes to the skies!"
        If not: "{pet} can only gaze upward..."

    - Create a new bird. (give whatever values to its attributes)
        - hint: make sure it is "true" that it can fly.
    - Within a console.log(), check the fly method of the new bird and another using either the dog or cat just created.

*/

//? Solution

//! Abstraction
// - Hiding complexity via an objects methods

class Tab {
    constructor(sub, tax) {
        this.subtotal = sub;
        this.tax = tax;
        this.tip;
    }

    tipAmount(x) {
        let total = this.subtotal + this.tax;

        this.tip = (total * x);
        let final = total + this.tip;
        return final.toFixed(2);
    }
}

let salesTax = .075;
let tipPercent = .2;

let dinnerBill = new Tab(42.83, salesTax);
let dinnerBill2 = new Tab(23.34, salesTax);

function calcTip(bill) {
    return(bill.tipAmount(tipPercent));
}

console.log(`Final Cost: $${calcTip(dinnerBill)}`);
console.log(`With a tip of $${dinnerBill.tip.toFixed(2)}`);
console.log(`Final Cost: $${calcTip(dinnerBill2)}`);
console.log(`With a tip of $${dinnerBill2.tip.toFixed(2)}`);

// Polymorphism 
// - The means of how objects respond in relationship from child to parent. (How methods in a parent class can be used by its children class)