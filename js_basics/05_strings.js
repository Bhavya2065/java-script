
/*
  =============================================================================
  📌 JAVASCRIPT STRINGS & STRING METHODS
  =============================================================================
  
  1. String Primitive vs String Object:
     - Primitives (`"text"`) are immutable sequence of characters.
     - String Objects (`new String("text")`) create object wrappers around strings.
     - Example:
         const str = "Bhavya"; // typeof string
         const strObj = new String("Bhavya"); // typeof object

  2. Template Literals (`...${var}...`):
     - String interpolation using backticks (`` ` ``).
     - Allows variable embedding & multi-line strings cleanly.
     - Example:
         console.log(`Hello, my name is ${name}`);

  3. Common String Methods:
     - `.slice(start, end)`, `.substring(start, end)`, `.includes()`, `.replace()`, `.split()`, `.trim()`.
  =============================================================================
*/

// Must rememebr Point: Once the new string is created, then you can't change it indivudial characters.

// =============================================================================
// 📌 1. STRING CREATION & TEMPLATE LITERALS
// =============================================================================

const name = "Bhavya"
const id = 220090116010
console.log(`My name is ${name} and my enrollment num is ${id}`); // It is morden way to display the value.
console.log(name[0]); // print: B
console.log(id[0]);  // undefined

// =============================================================================
// 📌 2. STRING OBJECT INSTANTIATION (NEW STRING)
// =============================================================================

const myname = new String('Hello World') // use to create the string object
console.log(typeof name); // Object
console.log(typeof myname); // Object

const my_name = "Hello Bhavya"
const enroll = new Number(220090116010)

console.log(myname[1]); // print: e
console.log(enroll[1]); // undefined

// =============================================================================
// 📌 3. ESSENTIAL STRING METHODS
// =============================================================================

console.log(myname.toUpperCase()); // convert string in uppercasef
console.log(myname.charAt(3)); // print the character at index no 3
console.log(myname.indexOf('e')); // It find the index of char e and print
console.log(myname.length); // It gives the length of the stringṇ
console.log(myname.substring(0, 4)); // It print the word from index 0 to 3
console.log(myname.slice(-2)); // Output: ld because length(11) - 2 = 9th index(starting) to end of the object
console.log(myname); // Output: [String: 'Hello World'] because we call the Object
console.log(my_name); // Output: Hello Bhavya because we call a normal variable.
console.log(myname.split(" ")); // space seperator: seperate the words because there will be a space between a space between the words  
console.log(myname.split()); // It takes the whole sentence in one array
console.log(myname.split("")); // It seperates the each character of the sentence
console.log(myname.bold()); // It shows in bold tag


const name1 = new String('    Hello Bhavya   ')
console.log(name1.trim()); // It removes the extra space before and after the sentence but not in middle
// Useful Apllication: while user enters it's detail in any form then if user puts the space by default then this method is used

const url = "https://improved-fishstick-97qrx6j6prx4c9xjq.git%20hub.dev/"
console.log(url.replace('%20', '-')); // It replace %20 with '-' 
console.log(url.includes('improv')); // It finds improv string in url and if there then true otherwise false
console.log(url.split("")); // split into array


let string = "Watch the full javascript course now on any yt-channel";
let strtoarr1 = string.split("")
console.log(strtoarr1);

// =============================================================================
// 📌 4. ADVANCED STRING METHODS & EVALUATION
// =============================================================================

console.log(eval("2 + 2"));
// Expected output: 4

console.log(eval(new String("2 + 2")));
// Expected output: 2 + 2

console.log(eval("2 + 2") === eval("4"));
// Expected output: true

console.log(eval("2 + 2") === eval(new String("2 + 2")));
// Expected output: false

// =============================================================================
// 📌 5. CHARAT() VS AT() (NEGATIVE INDEX SUPPORT)
// =============================================================================

let str = "The quick brown fox jumps over the lazy dog.";

console.log(str.charAt(6));
console.log(str.charAt(-6)); // always return empty string

console.log(str.at(6));
console.log(str.at(-6)); // It calculate the index from the back of the string

// =============================================================================
// 📌 6. STRING CONCATENATION (.CONCAT)
// =============================================================================

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(str2)); // Expected output: "HelloWorld"
console.log(str1.concat(" ", str2)); // Expected output: "Hello World"
console.log(str2.concat(", ", str1)); // Expected output: "World, Hello"

// =============================================================================
// 📌 7. STRING INDEXOF() & EDGE CASES
// =============================================================================

// Syntax: 
// indexOf(searchString)
// indexOf(searchString, position)

// Example: 1
const strSearch = "Hello Hello";
console.log(strSearch.indexOf("Hello", 1)); // Output: 6 (Second Hello) 

// Example: 2
const strIndex = "JavaScript";
console.log(strIndex.indexOf("a", 2)); // Output: 3 


let story = "that one new Hooror Story!!";
console.log(story.indexOf("w", 14)); // -1 bcz it starts the serching from index 14

// Some imporatant Edge Cases:
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11

// =============================================================================
// 📌 8. STRING MATCH() (REGEX SEARCH)
// =============================================================================

// Syntax: match(regexp)

const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found); // Expected output: Array ["T", "I"]

// =============================================================================
// 📌 9. STRING PADEND() METHOD
// =============================================================================

// Synatx:
// padEnd(targetLength)
// padEnd(targetLength, padString) : jya string end thay tyarthi padstring saru thase e pan targetlength sudhi

const strPadEnd1 = "Breaded Mushrooms";
console.log(strPadEnd1.padEnd(25, ".")); // Expected output: "Breaded Mushrooms........"

const strPadEnd2 = "200";
console.log(strPadEnd2.padEnd(5, "+")); // Expected output: "200++"


// =============================================================================
// 📌 10. STRING PADSTART() METHOD
// =============================================================================

// Synatx:
// padStart(targetLength)
// padStart(targetLength, padString) 
// targetLength → Final length you want.
// padString → Characters to add.

const strPadStart = "5";
console.log(strPadStart.padStart(3, "0")); // Expected output: 005

// Reason: 

// "5"   -> length 1
// Need length 3
// Add "0" at start twice

// Result: "005"

// =============================================================================
// 📌 11. STRING REPEAT() METHOD
// =============================================================================

// Synatx: repeat(count)

const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`); // Expected output: "I feel Happy! Happy! Happy! "

// Edge Cases:
// "abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1 / 0); // RangeError

// =============================================================================
// 📌 12. STRING SUBSTRING() METHOD
// =============================================================================

// Synatx: 
// substring(indexStart)
// substring(indexStart, indexEnd - 1)

const strSub = "Mozilla";

console.log(strSub.substring(1, 3)); // Expected output: "oz"
console.log(strSub.substring(2)); // Expected output: "zilla"