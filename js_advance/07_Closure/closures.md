# Lexical Scoping and Closures Guide

This guide explains **Lexical Scoping** and **Closures** in JavaScript using the examples from [closures.js](file:///e:/js/js_advance/07_Closure/closures.js) and [07_closure.html](file:///e:/js/js_advance/07_Closure/07_closure.html).

---

## 1. Lexical Scoping

**What is it?**
Lexical scoping is a rule: an **inner function** always has access to the variables of its **outer (parent) function**.

### Example from [closures.js](file:///e:/js/js_advance/07_Closure/closures.js):
```javascript
function parentContainer() {
    const name = "Bhavya"; // Parent variable

    function childContainer() {
        // Child can access parent's variable
        console.log(name); // Prints: "Bhavya"
    }
    childContainer();
}
parentContainer();
```

---

## 2. Closure

**What is it?**
A **closure** is when an inner function is returned from an outer function. Even after the outer function finishes executing and is cleared from the stack, the inner function remembers its outer function's variables.

### Example from [closures.js](file:///e:/js/js_advance/07_Closure/closures.js):
```javascript
function parentContainer() {
    const role = "Bhavya"; // Variable inside parent scope

    function childContainer() {
        console.log(role); // Remembers "role"
    }
    return childContainer; // Returns the function
}

const fn = parentContainer(); // Runs parentContainer and finishes
fn(); // Prints: "Bhavya"
```

### Behind the Scenes:
When you store the returned function in `const fn`, it does not just store the function code. It also stores the **Lexical Scope** (the variable `role = "Bhavya"` in memory).

---

## 3. Real-World Practical Example (DOM Color Changer)

Closures are useful when you want to pass parameters to event handlers.

### Example from [07_closure.html](file:///e:/js/js_advance/07_Closure/07_closure.html):
We have two buttons to change the background color:
```html
<button id="orange">Orange</button>
<button id="green">Green</button>
```

We write one function to handle both button clicks:
```javascript
function clickHandler(color) {
    // Returns a function that remembers the color parameter
    return function() {
        document.body.style.backgroundColor = `${color}`;
    }
}

// Set up the event listeners
document.getElementById('orange').onclick = clickHandler("orange");
document.getElementById('green').onclick = clickHandler("green");
```

### Why Closure is required here:
* `onclick` expects a **function definition**, not a function call.
* If you wrote `onclick = clickHandler("orange")` without returning a function, it would run immediately when the page loads, not when clicked.
* By returning an inner function, we delay the execution. Because of **closure**, the returned function remembers the specific `color` ("orange" or "green") even after `clickHandler` finishes executing.

---

## Quick Summary Table:

| Feature | Lexical Scoping | Closure |
| :--- | :--- | :--- |
| **What is it?** | A rule about variable access in nested scopes. | A function packaged with its saved parent scope. |
| **When does it run?** | While the parent function is executing. | After the parent function has finished executing. |
