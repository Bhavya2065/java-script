# Explanation of constructer.js

This file explains how the `new` keyword works in JavaScript. It shows what happens when you do not use it, and how it fixes bugs.

## The Problem: Calling the Function Without `new`

When you call the function `User` without `new` (like `User("Alice", 5, true)`):

*   **No new object is created:** JavaScript does not make a new blank object for the user.
*   **It uses the Global Object:** Inside the function, the `this` keyword points to the global object (window in browsers, global in Node.js).
*   **Values get overwritten:** 
    *   First, `userOne` sets `this.username` to `"Alice"` on the global object.
    *   Next, `userTwo` runs and changes the same `this.username` on the global object to `"Bob"`.
    *   This overwrites `"Alice"` completely.
*   **Shared values:** Both `userOne` and `userTwo` point to the same global object. So both will print `"Bob"`.

---

## The Solution: Using the `new` Keyword

When you add the `new` keyword (like `new User("Alice", 5, true)`), the bug is fixed:

*   **Separate objects:** Each call creates a different object.
*   **No overwriting:** `"Alice"` and `"Bob"` are saved in their own separate places.

---

## What the `new` Keyword Does (Step-by-Step)

When you use the `new` keyword, Javascript does 4 steps:

*   **Step 1 (Create):** It creates a brand-new, empty object: `{}`.
*   **Step 2 (Link):** It links this new object to the function. Now, the keyword `this` points to this new object.
*   **Step 3 (Add Properties):** It runs the function code. All the properties like `username` and `loginCount` are added to the new object.
*   **Step 4 (Return):** It returns the new object automatically so you can save it in a variable.
