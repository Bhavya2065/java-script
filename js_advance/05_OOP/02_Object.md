# Explanation of 02_Prototype.js

This file explains how **Prototypes** and the **`new` keyword** work in JavaScript.

---

## 1. Functions are also Objects in JavaScript
*   In JavaScript, almost everything is an object (Arrays, Strings, and even Functions).
*   Because functions are objects, you can add properties directly to a function (like `myFun.power = 2`).

---

## 2. Adding Methods to Prototypes
*   Every function has a special property called `prototype` which is a blank object `{}` by default.
*   You can add your own custom methods (functions) to this prototype object.
*   In the file, two methods are added to the prototype of `CreateUser`:
    *   `increment()`: Increases the user's score by 1.
    *   `printme()`: Prints the current score to the console.

---

## 3. The `new` Keyword Behavior
*   When you create a user with the `new` keyword:
    *   Example: `const chai = new CreateUser("chai", 23)`
    *   JavaScript creates a new object and links it to `CreateUser.prototype`.
    *   Now, `chai` can access the `printme()` and `increment()` methods.
*   When you create a user **without** the `new` keyword:
    *   Example: `const tea = CreateUser("tea", 13)`
    *   JavaScript does **not** link the prototype or return a new object.
    *   If you try to read properties or run methods on `tea`, it will fail or show an error.

---

## 4. Errors in the Code
*   `console.log(chai.printme())`: This works and prints the score, but returns `undefined` because `printme()` does not return a value.
*   `console.log(chai.price())`: This will throw a crash/error because there is no method named `price` defined on the prototype of `CreateUser`.
