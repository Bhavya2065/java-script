/*
  =============================================================================
  📌 ARRAYS & ARRAY METHODS IN JAVASCRIPT
  =============================================================================
  
  1. Mutating (Destructive) vs Non-Mutating Methods:
     - Mutating (changes original array): `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`, `.sort()`, `.reverse()`.
     - Non-Mutating (returns new array/value): `.slice()`, `.concat()`, `.join()`, `.filter()`, `.map()`, `[...spread]`.

  2. slice() vs splice():
     - `.slice(start, end)`: Non-destructive copy from start to end-1. Supports negative index `-2` (from end).
     - `.splice(start, count, items...)`: Destructive mutation. Used to delete, insert, or replace items.

  3. Useful Helpers:
     - `Array.isArray()`, `Array.from()`, `Array.of()`, `.flat()`, `.reduce()`.
  =============================================================================
*/

const array = [1, 2, 3, 4]
const newarray = ["Bhavya", "Divyansh", true] // we can easily assign more than one datatype variable in array
console.log(array); // typeof: Object
console.log(typeof array);
console.log(newarray);
console.log();

// =============================================================================
// 📌 1. BASIC ARRAY METHODS (PUSH, POP, SHIFT, UNSHIFT, JOIN, MERGING)
// =============================================================================

array.push(5) // It push the element at the top of the array (Changes the original array)
console.log(array);

array.pop() // It removes one element at the top of the array (Changes the original array)
console.log(array);

array.unshift(0) // It adds the element at the starting of the array (Changes the original array)
// Exception : It works fast only with small size array
console.log(array);

array.shift() // It removes the element at the starting of the array (Changes the original array)
console.log(array);

console.log(array.includes(1)); // true
console.log(array.indexOf(3)); // It finds this number in array and return the index 
console.log(array.indexOf(6)); // If number is doesn't exist in array then It returns the -1
console.log();

const myNewArray = array.join()
console.log(array);
console.log(myNewArray);
console.log(typeof myNewArray); // It converts Object --> String
console.log();

// It is not join two array but use to convert into String, comma seperated, place huphen(-) etc. 
// Example shows below 
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // output: "Fire,Air,Water"
console.log(elements.join("")); // output: "FireAirWater"
console.log(elements.join("-")); // output: "Fire-Air-Water"
console.log();

const digits = [0, 1, 2, 3]
const nums = [4, 5, 6, 7]
console.log(digits.push(nums)) // It retuns the length of pushed array which is 5 
console.log(digits); // Output: [ 0, 1, 2, 3, [ 4, 5, 6, 7 ] ] (Changes the original array)
console.log(digits.length); // 5

const number = [0, 1, 2, 3]
number.push(nums[0], nums[1], nums[2], nums[3])
console.log(number); // Output: [ 0, 1, 2, 3, 4, 5, 6, 7 ]
console.log(number.length); // Output: 8

const newNums = number.concat(nums)
console.log(newNums); // long method
console.log(number.concat(nums)); // short method (Returns new array)
// It returns the array after concatinating elements based on the condition [ 0, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7 ] 
// push and concat working are same but push directly adds an new element which is passed while concat add to arrays and retun new array, So there will be some change in syntax
console.log();

const all_nums = [...number, ...nums, ...array] // It is also used for merging two or more array (Best method)
console.log(all_nums);
console.log();

console.log(Array.isArray("Bhavya")); // false
console.log(Array.isArray(array)); // true
console.log(Array.from("Bhavya")); // Use: Convert string to array 
// Output: [ 'B', 'h', 'a', 'v', 'y', 'a' ]
console.log(Array.from({ name: "Bhavya", age: 20 })); // Asked in Interview
// It returns empty array because it not directly convert the key into array
console.log(Array.from(true)) // []

let score1 = 100
let score2 = 200
let score3 = 300
let name = "Bhavya"
console.log(Array.of(score1, score2, score3, name)); // Another method for creating array
console.log();

// =============================================================================
// 📌 2. SLICE() VS SPLICE()
// =============================================================================

// slice() - Non-destructive (does NOT mutate original array)
// Syntax: 
// slice()
// slice(start)
// slice(start, end)

const sliceArr = [1, 2, 3, 4, 5];
console.log(sliceArr.slice(0, 2)); // Output: [1, 2] (extracts index 0 up to index 1)
console.log(sliceArr.slice(-2));   // Output: [4, 5] (negative index starts from end: length - 2)
console.log(sliceArr);             // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// splice() - Destructive (mutates original array & returns array of deleted items)
// Syntax: 
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1, item2, ...)

// 1. Delete elements:
const spliceArr1 = [1, 2, 3, 4, 5];
console.log(spliceArr1.splice(1, 3)); // Output: [2, 3, 4] (deleted items)
console.log(spliceArr1);              // Output: [1, 5] (modified original array)

// 2. Negative Indexing in splice:
const spliceArr2 = [10, 20, 30, 40, 50];
console.log(spliceArr2.splice(-2, 1)); // Output: [40] (-2 index targets 40, deletes 1 item)
console.log(spliceArr2);               // Output: [10, 20, 30, 50]

// 3. Add elements without deleting:
const spliceArr3 = [1, 2, 5];
spliceArr3.splice(2, 0, 3, 4); // start at index 2, delete 0, add 3 and 4
console.log(spliceArr3);       // Output: [1, 2, 3, 4, 5]

// 4. Replace elements:
const spliceArr4 = ["Apple", "Banana", "Orange"];
spliceArr4.splice(1, 1, "Mango"); // replace index 1 ("Banana") with "Mango"
console.log(spliceArr4);          // Output: ["Apple", "Mango", "Orange"]
console.log();

// =============================================================================
// 📌 3. COPYWITHIN() METHOD
// =============================================================================

// Syntax: copyWithin(target, start, end)
// Usecase: Here start and end is optional. It copy the values from start to (end-1) and paste it from the target. 

console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // [4, 5, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));  // [ 1, 2, 3, 3, 4 ]
console.log([1, 2, 3, 4, 5].copyWithin(2, -3, -1));  // [ 1, 2, 3, 4, 5 ]
console.log([1, 2, 3, 4, 5].copyWithin(2, 3, -1));  // [ 1, 2, 4, 4, 5 ]

// Note: Here "-3" means (array.length + (-3)) = (5 -3) = 2nd index
// It is mutating method means it changes the original array

// =============================================================================
// 📌 4. FILL() METHOD
// =============================================================================

// Synatx: fill(target, start, end - 1)
// Usecase: Here start and end is optional, it copies the target index value and paste it over from start to end-1

const subArray = [1, 2, 3, 4];
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill()); // [undefined, undefined, undefined]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log(subArray.fill(4));


// How to create array of index 3
console.log(Array(3)); // [ <3 empty items> ]
console.log(Array(3).fill(4)); // [4, 4, 4]

// =============================================================================
// 📌 5. EVERY() METHOD
// =============================================================================

// Syntax:
// every(callbackFn)
// every(callbackFn, thisArg)

const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every((currentValue) => currentValue < 40)); // Expected output: true

// =============================================================================
// 📌 6. FILTER() METHOD
// =============================================================================

// Synatx: 
// filter(callbackFn)
// filter(callbackFn, thisArg)

// Usecase: The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
console.log(result); // Expected output: Array ["exuberant", "destruction", "present"]

// =============================================================================
// 📌 7. FIND() METHOD
// =============================================================================

// Synatx: 
// find(callbackFn)
// find(callbackFn, thisArg)

// Usecase: The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const array2 = [5, 12, 8, 130, 44];

const found = array2.find((element) => element > 10);
console.log(found); // Expected output: 12

// Other Replated Methods: findIndex(), findLast(), findLastIndex()     

// =============================================================================
// 📌 8. FLAT() METHOD
// =============================================================================

// Synatx: 
// flat()
// flat(depth)

// Usecase: The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr3 = [0, 1, 2, [3, 4]];
console.log(arr3.flat()); // expected output: Array [0, 1, 2, 3, 4]

const arr4 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr4.flat()); // expected output: Array [0, 1, 2, [3, [4, 5]]]
console.log(arr4.flat(2)); // expected output: Array [0, 1, 2, 3, [4, 5]]
console.log(arr4.flat(3)); // expected output: Array [0, 1, 2, 3, 4, 5]
console.log(arr4.flat(Infinity)); // expected output: Array [0, 1, 2, 3, 4, 5]


// =============================================================================
// 📌 9. FOREACH() METHOD
// =============================================================================

// Synatx: 
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

const array5 = ["a", "b", "c"];

array5.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// Note: the foreach() loop does not return any value, so that the we use the foreach method for apply conditions on array but it return nothing.

// =============================================================================
// 📌 10. REDUCE() METHOD
// =============================================================================

const Myarr = [1, 3, 5, 7]
const total = Myarr.reduce((accumulator, currentValue) => { // Here accumulator and current value(array first value at starting and updaed with steps)
   console.log(`Accumulator: ${accumulator}`);
   console.log(`currentValue: ${currentValue}`);
   console.log();
   return accumulator + currentValue
}, 0) // Here 0 is initial value, It is optional; if we pass 5 as initial value than so the 5 is first go to accumulator and add with the currentvalue according to equation 
console.log(total); // It returns the total of all numbers in num
console.log();

// =============================================================================
// 📌 11. REVERSE() METHOD
// =============================================================================

const array4 = ["one", "two", "three", "four"];
const reversed = array4.reverse();
console.log("reversed:", reversed); // Expected output: reversed: [ 'four', 'three', 'two', 'one' ]

// =============================================================================
// 📌 12. SOME() METHOD
// =============================================================================

// Syntax: 
// some(callbackFn)
// some(callbackFn, thisArg)

// Usecase: At least one element of array that satisfy the condition

const nums2 = [1, 2, 3, 4, 6]
nums2.some((number) => number > 5) // Output: true


// =============================================================================
// 📌 13. SORT() METHOD
// =============================================================================
console.log();

// Syntax: sort(compareFn)
// Modify original Array

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array12 = [1, 30, 4, 21, 100000];
array12.sort();
console.log(array12);
// Expected output: Array [1, 100000, 21, 30, 4]

const array10 = [1, 30, 4, 21, 100000];
array10.sort((a, b) => a - b);
console.log(array10);
// Output: [ 1, 4, 21, 30, 100000 ]

const array11 = [1, 30, 4, 21, 100000];
array11.sort((a, b) => b - a);
console.log(array11);
// Output: [ 100000, 30, 21, 4, 1 ]

let string = "Watch the full javascript course now on any yt-channel";
let strtoarr = string.split(" ");
strtoarr.sort((a, b) => a.length - b.length); // So we get the sorted array in accending order
console.log(strtoarr);