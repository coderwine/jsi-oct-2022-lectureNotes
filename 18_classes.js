/*
! Classes
    - Introduced in 2015
    - A function that helps us create objects
    - Defines a catagory of objects

*   Base structure
    class NameOfClass {
        constructor(parameter) {
            this.key = paramter
        }

        methodName() {
            ... code
        }
    }

    * Class names start in Pascal Casing
*/

// 1    2
class Item {
//        3               4
    constructor(name, desc, price) {
//        5    6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/*
    1. Keyword to establish what type of "function"
    2. The Name of our class. Should be Pascal Case.
    3. Keyword - is automatically run when the class is instantiated.
    4. Parameters for our constructed object. Establishes the values within the objects keys.
    5. Keyword - refers to "this" specific object being created.
    6. The name of a key within our object. (Item will have 3 different keys)
    7. The value for those keys (referenced by the parameters)
*/

//! Instantiating

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
console.log(one);
one.name = 'sample';
console.log(one);

let itemZero = new Item();
console.log(itemZero); // returns an object with set keys that hold undefined values.

let itemOne = new Item('beans','canned',0.89);
console.log(itemOne);

// let brokenItem = Item();
// console.log(brokenItem);

//* Factory Functions
let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(item, desc, cost) {
    return new Item(item, desc, cost);
}

let useFunction = processItem(iType, iDesc, iCost);
console.log('Factory Function: ', useFunction);

//! Methods

class DeptInventory {
    constructor(dept) {
        this.deptartment = dept;
        this.items = [];
    }

//        1            2
    addToInventory(newItem) {
//           3           4
        this.items.push(newItem);
        console.log('Item Added!');
    }
}

// 5
let dryGoods = new DeptInventory('Dry Goods');
let itemTwo = new Item('corn', 'canned',0.79);

// 6
dryGoods.addToInventory(itemTwo);
dryGoods.addToInventory(itemOne);
console.log(dryGoods);
/*
    1. Establishing the name of our method.
    2. The parameter that our method accepts.
    3. Points to "this" objects key
    4. Using an array method to add to items array.
    5. Establishing a new object of a department
    6. Using the method created for this object.
*/

//* Factory Methods

class Expense {
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w, s) {
        this.purchase_price = w;
        this.sell_at = s;
        this.plus_sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.plus_sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
console.log(itemToSell);

let anotherItem = Expense.addUpchargeForProfit(2);
console.log(anotherItem);
anotherItem.addTax(.075);
console.log(anotherItem);

//! Class Inheritance
