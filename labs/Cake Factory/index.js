class Cake {
    constructor(flavor, icing, decoration) {
        this.flavor = flavor;
        this.icing = icing;
        this.decoration = decoration;
    }

    describe() {
        // console.log(`It is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}.`);

        if(
            this.flavor !== null &&
            this.icing !== null &&
            this.decoration !== null
        ) {
            console.log(
                `This ${this.flavor} cake has ${this.icing} icing and it has ${this.decoration} on it.`
            );
        } else if(this.flavor === null && this.icing === null) {
            console.log(
                `Can't tell what flavor or type of icing, but ${this.decoration} is on it.`
            );
        } else if(this.flavor === null && this.decoration === null) {
            console.log(
                `Can't tell what flavor or what is decorating it, but it has ${this.icing} icing.`
            );
        } else if(this.icing === null && this.decoration) {
            console.log(
                `Can't tell what icing or what is decorating it, but it is a ${this.flavor} cake.`
            );
        } else if(this.flavor === null) {
            console.log(
                `Now sure what flavor, but it has ${this.icing} icing with ${this.decoration} on it`
            );
        } else if(this.icing === null) {
            console.log(
                `Now sure what icing, but it is a ${this.flavor} cake with ${this.decoration} on it.`
            );
        } else {
            console.log(
                `Not sure what the decoration is, but it is a ${this.flavor} cake with ${this.icing} icing on it.`
            );
        }
    }

    eat(slice) {
        console.log(`A ${slice} slice of ${this.flavor} cake!`);
    }
}

let choco = new Cake('chocolate','buttercream', 'Sponge Bob');
let vanilla = new Cake('vanilla','buttercream', 'Snow White');
let german = new Cake('german chocolate','whipped', 'Dragon');

console.log(choco);

choco.describe();
vanilla.describe();
german.describe();

choco.eat('thick');

let cakeOne = new Cake('chocolate', 'buttercream', null);
let cakeTwo = new Cake('vanilla', null, 'Spider-Man');
let cakeThree = new Cake('german chocolate', null, null);
let cakeFour = new Cake(null, 'whipped', null);
let cakeFive = new Cake(null, null, 'Iron Man');
let cakeSix = new Cake(null, 'buttercream', 'Sponge Bob');

cakeOne.describe();
cakeTwo.describe();
cakeThree.describe();
cakeFour.describe();
cakeFive.describe();
cakeSix.describe();