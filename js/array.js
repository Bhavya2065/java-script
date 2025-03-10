const array = [1,2,3,4]
const newarray = ["Bhavya", "Divyansh", true] // we can easily assign more than one datatype variable in array
console.log(array); // typeof: Object
console.log(typeof array);
console.log(newarray);
console.log(array[0]);
console.log();

// ************************************ Array Methods ****************************************

array.push(5) // It push the element at the top of the array
console.log(array);

array.pop() // It removes one element at the top of the array
console.log(array);

array.unshift(0) // It adds the element at the bottom of the array
// Exception : It works fast only with small size array
console.log(array);

array.shift()
console.log(array);

console.log(array.includes(1)); // true
console.log(array.indexOf(3)); // It finds this number in array and return the index 
console.log();

const myNewArray = array.join()
console.log(array);
console.log(myNewArray);
console.log(typeof myNewArray); // It converts Object --> String
console.log();

const digits = [0,1,2,3]
const nums = [4,5,6,7]
console.log(digits.push(nums)) // It retuns the length of pushed array which is 5 => [ 0, 1, 2, 3, [ 4, 5, 6, 7 ] ]
console.log(digits); // It changes the Original array
console.log(digits.length);

const number = [0,1,2,3]
number.push(nums[0], nums[1], nums[2], nums[3])
console.log(number);
console.log(number.length);

const newNums = number.concat(nums)
console.log(newNums);
// push and concat working are same but push directly adds an new element which is passed while concat add to arrays and retun new array, So there will be some change in syntax

const all_nums = [...number, ...nums, ...array]
console.log(all_nums);

console.log(Array.isArray("Bhavya")); // false
console.log(Array.isArray(array)); // true
console.log(Array.from("Bhavya"));
console.log(Array.from({name: "Bhavya", age: 20})); // Asked in Interview
// It returns empty array because it not directly convert the key into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


// **************************** Two special Methods That asked in interview *********************************

console.log(array);
console.log(array.slice(0,2)); // It return the element between the index strtig from 0 to (2-1) = 1.
console.log(array);

console.log(array.splice(1,3)); // It removes the element from original array from start index to end index
// It affects the original array as well
console.log(array);