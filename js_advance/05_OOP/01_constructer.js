// Problem: Witout new keyword

function User(username, loginCount, isLoggedIn) {
  // ⚠️ THE OVERRIDE MISTAKE HAPPENS HERE: 
  // Because 'new' is missing when we call the function below, 
  // 'this' does NOT point to a fresh, blank object.
  // Instead, 'this' points to the giant, shared Global Object in the background!
  this.username = username; 
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

// -----------------------------------------
// STEP-BY-STEP OVERRIDE IN ACTION:
// -----------------------------------------

// 1. CALL ONE:
// This runs and attaches username: "Alice" directly to the shared Global Object.
const userOne = User("Alice", 5, true); 

// 2. CALL TWO (THE OVERRIDE):
// This runs and targets the exact same shared Global Object!
// It finds the 'username' we just made and completely overwrites "Alice" with "Bob".
const userTwo = User("Bob", 4, true);

// 3. THE RESULT:
// Both variables just point back to the same Global Object, 
// so "Alice" is gone forever.
console.log(userOne.username); // Output: "Bob" 
console.log(userTwo.username); // Output: "Bob"


// ================================================================================================================================
// IMP: To fix the override bug, we just need to focus on the exact lines where the users are created. The mistake was leaving out the new keyword when calling the function.


// ❌ The Mistake:
// const userOne = User("Alice", 5, true);

// ✅ The Solution (adding 'new'):
// const userOne = new User("Alice", 5, true); 
// const userTwo = new User("Bob", 4, true);
// ================================================================================================================================

// Note about new keyword for Interview:
// Step 1. Whenever you use the 'new' keyword, it creates a brand-new, empty object {}.
// Step 2. It calls the constructor function and points the 'this' keyword directly to that newly created object.
// Step 3. All the arguments you pass are injected into that new object using the 'this' keyword.
// Step 4. Finally, it automatically returns the complete object so you can store it in a variable.


// ================================================================================================================================
// INHERITANCE & super() KEYWORD ERROR NOTE:
// ================================================================================================================================
/*
❌ Common Error when extending a Parent class:

class Parent {
  constructor(name) {
    this.parentname = "shraddha";
  }
}

class FirstChild extends Parent {
  constructor(name) {
    this.childName = name; // ❌ ReferenceError: Must call super constructor in derived class before accessing 'this'
  }
}

const childObj = new FirstChild("Bhavya");

Why super() is mandatory:
1. In JS inheritance, when a child class uses `extends`, the parent constructor initializes the base `this` object.
2. Without calling `super()`, `this` does NOT exist yet in the child constructor.
3. Therefore, calling `super()` FIRST is required before accessing `this`.

✅ The Solution (Call super()):

class FirstChild extends Parent {
  constructor(name) {
    super(name); // ✅ Calls parent constructor and initializes 'this'
    this.childName = name;
  }
}
*/