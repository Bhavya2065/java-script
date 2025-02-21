// *********************************** First Method **************************************

const name = "Bhavya"
const id = 220090116010
console.log(`My name is ${name} and my enrollment num is ${id}`); // It is morden way to display the value.

console.log(name[0]); // print: B
console.log(id[0]);  // undefined

// *********************************** second Method **************************************

const myname = new String('Hello World')
const enroll = new Number(220090116010)

console.log(myname[1]); // print: e
console.log(enroll[1]); // undefined

// *********************************** Methods in String **************************************

console.log(myname.toUpperCase()); // convert string in uppercase
console.log(myname.charAt(3)); // print the character at index no 3
console.log(myname.indexOf('e')); // It find the index of char e and print
console.log(myname.length); // It gives the length of the string
console.log(myname.substring(0, 4)); // It print the word from index 0 to 3
console.log(myname.slice(-2)); // It is same as substring but we can also take the negative value
console.log(myname.split(" ")); // space seperator: seperate the words because there will be a space between a space between the words  
console.log(myname.split()); // It takes the whole sentence in one array
console.log(myname.split("")); // It seperates the each character of the sentence
console.log(myname.bold()); // It shows in bold tag

const name1 = new String('    Hello Bhavya   ')
console.log(name1.trim()); // It removes the extra space before and after the sentence but not in middle
// Useful Apllication: while user enters it's detail in any form then if user puts the space by default then this method is used

const url = "https://improved-fishstick-97qrx6j6prx4c9xjq.git%20hub.dev/"
console.log(url.replace('%20','-')); // It replace %20 with '-' 
console.log(url.includes('improv')); // It finds improv string in url and if there then true otherwise false
