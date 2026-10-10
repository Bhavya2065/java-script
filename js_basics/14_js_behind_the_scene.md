<!--
  =============================================================================
  📌 JAVASCRIPT EXECUTION CONTEXT & CALL STACK BEHIND THE SCENES
  =============================================================================
  
  1. Global Execution Context (GEC):
     - Created when code runs; allocates `this` binding and Global scope.

  2. Two Execution Phases:
     - Phase 1: Memory Creation Phase (allocates memory for variables as `undefined` and function definitions).
     - Phase 2: Execution Phase (executes code line-by-line, assigns values, invokes functions).

  3. Call Stack (LIFO - Last In First Out):
     - Tracks active execution contexts; pushes contexts on function call, pops off on completion.
  =============================================================================
-->

# Understanding How JavaScript Works Behind the Scenes

This guide explains the core concepts of how JavaScript executes code. This section dives into the internal mechanics that power your code.

## 1. The Execution Context

When you run a JavaScript program, the engine creates an **"Global Execution Context"** and also provide the 'this' keyword to that context. it also creates one new Execution context named which is **"Function Execution Context"**.

- **Memory Creation Phase:** Before the code actually runs line-by-line, the engine scans the code to allocate memory for variables and functions. Variables are initially stored as `undefined`, and functions are stored as definition.
- **Execution Phase:** This is where the code is executed line-by-line. The engine assigns actual values to the variables and executes function calls.

## 2. The Call Stack

JavaScript is a single-threaded language, meaning it can only do one thing at a time. To manage which function is currently running, it uses the Call Stack.

- **How it works:** The stack operates on a LIFO (Last In, First Out) principle.
- When a function is invoked, it is "pushed" onto the top of the stack.
- When the function finishes executing, it is "popped" off the stack.
- The Global Execution Context is always at the bottom of the stack.

## 3. Visual Representation of the Call Stack

Imagine a stack of plates. You add a plate to the top, and you take from the top.

```text
Function C  <-- Top (Executing now)
Function B
Function A
Global      <-- Bottom
```

## Summary of Key Steps

1. **Global Execution:** The engine starts by creating the Global Execution Context.
2. **Memory Phase:** All variables and functions are hoisted and initialized (variables as `undefined`).
3. **Code Execution:** The engine goes line by line. If a function call is encountered, a new execution context is created for that function and pushed onto the Call Stack.
4. **Completion:** Once the function finishes, its execution context is deleted, and the engine returns to the previous context on the stack.
