let shoppingList = [
    // ["milk", 1],
    // ["cheese", 2],
    // ["ice cream", 3]
];

function addToList(someList, someItem) {
// your code here
// should add someItem to someList
// if the someItem exists, increment the quantity by 1

//? SOLUTION
    let arr = [];
    arr.push(someItem);
    arr.push(1);

    if(someList.length > 0) {
        someList.forEach((item, i) => {
            
            item.forEach(d => {

                if(arr[0] === d) {
                    let increase = someList[i][1] + 1;
                    arr.splice(1,1,increase);
                    someList.splice(i, 1, arr);
                }
            })
        });
    } else {
        someList.push(arr);
    }

}

function removeFromList(someList, someItem) {
// your code here
// search someList for someItem and remove it
// rearrange the rest of the items within the Array
// so that there are no gaps within the Array
}

function updateQuantity(someList, someItem, newQuantity) {
// your code here
// search someList for someItem and
// change the quantity to the newQuantity value
}

addToList(shoppingList, "eggs");
// adds ["eggs" , 1] to the shoppingList Array
console.log(shoppingList);

addToList(shoppingList, "eggs");
// updates the shoppingList Array to 
// include ["eggs" , 2]
console.log(shoppingList);

// updateQuantity(shoppingList, "eggs", 12);
// updates the shoppingList Array to 
// include ["eggs" , 12]

// removeFromList(shoppingList, "eggs");
// shopping list should now be reset back to
// [["milk", 1],["cheese", 2],["ice cream", 3]];