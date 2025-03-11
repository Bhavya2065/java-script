// iife: Immediately Invoked Function Expressions (IIFE)

// Use: To remove global scope polution 

// Condition: without remove the gloabal polution means gloabal variable declaration
function chai() {
    console.log(`DB Connected!!`);
}
chai();

// Condition: with remove the gloabal polution 
(function db(){
    console.log(`DB Connected!!`);
})(); // semicolon must for ending the process

// Condition: with remove the gloabal polution using arrow function

( (name) => {
    console.log(`${name} DB Connnect!!`);
} )('bhavya'); // semicolon must for ending the process

// interview questions : How to write two iife in one file? 
// Answer : solution is above 