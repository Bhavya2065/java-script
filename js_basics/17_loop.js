/*
  =============================================================================
  📌 LOOPS & ARRAY ITERATION METHODS
  =============================================================================
  
  1. Standard Loops:
     - `for`, `while`, `do-while`. Use `break` to terminate loop, `continue` to skip current iteration.

  2. Specialized Iteration Loops:
     - `for...of`: Iterates over values of iterable objects (Arrays, Strings, Maps).
     - `for...in`: Iterates over keys/properties of Objects (and indices of Arrays).

  3. Array Iteration Helpers (HOF):
     - `.forEach()`: Executes callback for each element; returns `undefined`.
     - `.map()`: Transforms each element and returns NEW array.
     - `.filter()`: Returns NEW array containing elements that pass condition test.
     - `.reduce()`: Accumulates array values into single result value.
  =============================================================================
*/

// ==========================================
// 1. FOR...OF LOOP
// ==========================================

// Iterating over an array
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}

// Iterating over a string with a break condition
const greeting = "Hello World!!";
for (const greet of greeting) {
    if (greet === " ") {
        break; // Stop loop when space is found
    }
    console.log(greet); // Prints each character before the space
}

// ==========================================
// 2. THE MAP DATA STRUCTURE
// ==========================================

console.log("\n============================== Map Data Structure =============================");

const map = new Map();
console.log(typeof map); // object

// Setting key-value pairs (Maps hold unique keys in insertion order)
map.set('IN', 'India');
map.set('IN', 'India'); // Duplicate key: will overwrite, not duplicate
map.set('USA', 'United States of America');
map.set('EN', 'England');
map.set('FR', 'France');

console.log(map); 
console.log(map.get('India')); // undefined (because 'India' is a value, not a key)

// Note: Map is iterable. We use for...of to iterate.
for (const [key, value] of map) {
    console.log(`${key} => ${value}`); // Best way to print Map entries
}

// Note: We cannot use for...in to iterate Map entries because for...in is for object properties.
for (const key in map) {
    console.log(`The key was: ${key}`); // Will not print anything as Map properties are not enumerable
}

// ==========================================
// 3. FOR...IN VS FOR...OF (ARRAYS & OBJECTS)
// ==========================================

const arr1 = [1, 2, 3, 4];
const obj = {
    name: "bhavya",
    age: 21,
    college: "CKPCET"
};

// for...in on Array: returns the indices (as strings)
for (const key in arr1) {
    console.log(key); // Output: "0", "1", "2", "3"
}

// for...in on Object: returns the keys
for (const key in obj) {
    console.log(key); // Output: "name", "age", "college"
}

// for...of on Array: returns the values
for (const val of arr1) {
    console.log(val); // Output: 1, 2, 3, 4
}

// for...of on Object: objects are not iterable by default
// for (const key of obj) {
//     console.log(key); // TypeError: obj is not iterable
// }

// Note: Using Object.entries() with for...of allows iterating key-value pairs of Objects, Arrays, and Strings:
// 1. On Object:
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} => ${value}`);
}

// 2. On Array: (gives string index and element)
for (const [index, element] of Object.entries(arr1)) {
    console.log(`${index} => ${element}`);
}

// 3. On String: (gives string index and character)
const sampleText = "Hello";
for (const [index, char] of Object.entries(sampleText)) {
    console.log(`${index} => ${char}`);
}


// for...in loop on an array to print elements
const pro_lan = ["java", "python", "ruby", "flutter", "js", "c++"];
for (const language in pro_lan) {
    const index = parseInt(language); // convert string index to number
    console.log(index + 1, " => ", pro_lan[language]);
}

// ==========================================
// 4. FOR-EACH LOOP (ARRAY ITERATION)
// ==========================================

const coding = ["java", "python", "ruby", "flutter", "js", "c++"];

// Method 1: Callback has access to item, index, and original array
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// Method 2: Normal function callback
coding.forEach(function (item) {
    console.log(item);
});

// Method 3: Arrow function callback (implicit return format)
coding.forEach((item) => console.log(item));

// Method 4: Passing a pre-defined function
function print(item) {
    console.log(item);
}
coding.forEach(print);

// ==========================================
// 5. DATABASE ITERATION USE CASE
// ==========================================

console.log("\n============================== Database Logic Example =============================");

const study = [
    { languagename: "c++", extensionname: "cpp" },
    { languagename: "java", extensionname: "java" },
    { languagename: "javascript", extensionname: "js" }
];

// Iterating over objects inside an array
study.forEach((item) => {
    console.log(item);
    console.log(item.languagename);
    console.log(item.extensionname);
});

study.forEach((item) => {
    console.log(`${item.languagename} => ${item.extensionname}`);
});

// ==========================================
// 6. FOREACH() VS FILTER() VS MAP()
// ==========================================

console.log("\n============================== difference between foreach(), filter() and map() =============================");

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach(): Performs action on each element, but returns undefined.
// It does not change the original array.
const values = arr3.forEach((item) => {
    return item > 3;
});
console.log(values); // undefined
console.log(arr3); // Original array remains unchanged

// filter(): Returns a new array with elements that satisfy the condition. (Reminder: Work based on only Condition)
// It does not change the original array.
const nums = arr3.filter((item) => {
    return item > 3;
});
console.log(nums); // [4, 5, 6, 7, 8, 9, 10]
console.log(arr3); // Original array remains unchanged

// map(): Returns a new array containing the results of calling the function on every element. (Reminder: Work based on only Operation)
// It does not change the original array.
const elements = arr3.map((item) => {
    return item > 3;
});
console.log(elements); // [false, false, false, true, true, true, true, true, true, true]
console.log(arr3); // Original array remains unchanged

// ==========================================
// 7. METHOD CHAINING
// ==========================================

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumbers
    .map((num) => num * 10)      // Multiply each element by 10
    .map((num) => num + 1)       // Add 1 to each element
    .filter((num) => num >= 40);  // Filter elements greater than or equal to 40

console.log(newNums);