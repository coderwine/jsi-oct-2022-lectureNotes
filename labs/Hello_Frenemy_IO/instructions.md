# Instructions

This exercise is similar to the `hello-frenemy.js` lab completed earlier in the course. 

However, now you will now use `readline` and the `ask` function to get the name to respond to.

---

Create a program that:

* Gets a name from INPUT, using `readline` and the `ask` function
* Forcefully rebukes the name IF they are an enemy:
  * You should have at least 3 enemies. At least 2 of which should be given the same response
  * At least one enemy should have a response specific to them:
    * For example if the name is "darth vader" the response could be "Noooooo! That's impossible!"
* Otherwise, greets a person warmly with their name as a friend: "Welcome, (friend's name)!"

## Example

```js
let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

function respond(name) {
  if (/* the name is an enemy */) {
    /* check if their name is 'darth vader' */
    /* tell them to go away */
  } else {
    /* greet them warmly by their name */
  }
}
```

```txt
// Output
What is your name?

// Input
darth vader

// Ouput
'Noooooo! That's impossible!'
```

Going Further:

* Sanitize the input so that enemies cannot sneak in with odd capitalization, such as "eNEmY".
* Handle full names so the printed response is "Hello, First Last!"
* Try and see if you can utilize the `enemyList` array to come up with a solution.