# JavaScript Prototypes Guide

This guide explains how prototypes work in JavaScript using the examples from [03_Prototype.js](file:///e:/js/js_advance/05_OOP/03_Prototype.js).

---

## 1. Adding a Method to String Prototype

You can add custom properties or methods to all strings using `String.prototype`.

### Example: `trueLength()`
This method prints the string and its length after removing extra spaces.

```javascript
// Define the prototype method
String.prototype.trueLength = function () {
    console.log(`${this}`); // Prints the string
    console.log(`${this.trim().length}`); // Prints length after trim
}

// Usage
let myName = "hitesh     ";
myName.trueLength(); 
// Output:
// hitesh     
// 6
```

---

## 2. Object Prototype vs. Specific Prototypes

JavaScript has a prototype chain. 

### A. Object Prototype (`Object.prototype`)
Everything in JavaScript (Array, String, Function) inherits from `Object`. If you add a method to `Object.prototype`, **all** variables can use it.

```javascript
Object.prototype.sayHello = function () {
    console.log("Hello from Object");
}

let myHero = ["spiderman"];
let heroPower = { thor: "hammer" };

myHero.sayHello();     // Works! (Array is an object)
heroPower.sayHello();  // Works! (Object is an object)
```

### B. Array Prototype (`Array.prototype`)
If you add a method to `Array.prototype`, only arrays can use it. Objects or strings cannot use it.

```javascript
Array.prototype.sayHi = function () {
    console.log("Hi from Array");
}

let myHero = ["spiderman"];
let heroPower = { thor: "hammer" };

myHero.sayHi();      // Works!
heroPower.sayHi();   // Error! (heroPower is not an Array)
```
