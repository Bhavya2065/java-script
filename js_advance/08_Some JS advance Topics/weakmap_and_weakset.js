// =================================================================
// 1. WEAKMAP (Note & Example)
// =================================================================

/*
  What is a WeakMap? (Definition for Interview)
  - A WeakMap is a collection of key-value pairs (like a Map).
  - The keys must be OBJECTS. Keys cannot be basic types like strings or numbers.
  - The keys are held "weakly". If the key object has no other reference in the code, it gets deleted from memory automatically (Garbage Collected).

  Purpose:
  - To store extra data for an object. Once the object is deleted, its extra data is also automatically deleted to prevent memory leaks.

  Key Interview Points:
  - It is NOT iterable (you cannot loop over it with forEach or for...of).
  - It has no `.size` property.
  - It has no `.clear()` method.
  - Supported methods: `.set()`, `.get()`, `.has()`, `.delete()`.
*/

// Example for WeakMap:
const weakmap = new WeakMap();
let obj = { name: "het" };

// 1. Set key-value
weakmap.set(obj, "Employee");

// 3. Garbage Collection (uncomment to test)
// obj = null; // Now the object and its value will be removed from memory automatically

// 2. Get value
console.log(weakmap.get(obj)); // Output: "Employee"
//(If line no 29 is uncomment then output: undefine bcz of removed from memory automatically)

// =================================================================
// 2. WEAKSET (Note & Example)
// =================================================================

/*
  What is a WeakSet? (Definition for Interview)
  - A WeakSet is a collection of unique objects (like a Set).
  - The values inside a WeakSet must be OBJECTS.
  - The values are held "weakly". If the value object has no other reference in the code, it gets deleted from memory automatically (Garbage Collected).

  Purpose:
  - Used to "tag" or "mark" objects. For example, to check if an object is already processed, without preventing it from being garbage collected.

  Key Interview Points:
  - It is NOT iterable (no loop support).
  - It has no `.size` property.
  - It has no `.clear()` method.
  - Supported methods: `.add()`, `.has()`, `.delete()`.
*/

// Example for WeakSet:
const weakset = new WeakSet();
let obj1 = { name: "het" };

// 1. Add object to WeakSet
weakset.add(obj1);

// 3. Garbage Collection (uncomment to test)
obj1 = null; // Now the object will be removed from memory automatically

// 2. Check if object exists
console.log(weakset.has(obj1)); // Output: true
//(If line no 63 is uncomment then output: false bcz of removed from memory automatically)


