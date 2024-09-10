// Two types of datatypes
// 1. Primitive Datatypes
// 2. Non-Primitive Datatypes

// Primitive Datatypes (7 Types)
// 1.string
// 2.Number
// 3.Boolean
// 4.Null
// 5.undefined
// 6.symbol
// 7.bigint

// Non-primitive Datatypes.
// 1.Array
// 2.object
// 3.function

// no need to assign datatype, It already assign automatically.
// Examples:
const score = 100 
const scorevalue = 100.56
const isLoggedIn = false

// Symbol Datatype 
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid); // false

// BigInt
const bigNumber = 8637326765763476574n

// array
const heros = ["Hanuman","Adinath","Mahavir","Krishna"]

// object
let myobj = {
    name : "Bhavya",
    age: 22
}

// Function
const fun = function() {
    console.log("Hello World!!");
    
}

// typeof : Define the type of datatype
console.log(typeof fun); // function
console.log(typeof myobj); // object
console.log(typeof heros); // object

// varable         typeof result
// undefined   =>  undefined
// null        =>  object
// boolean     =>  boolean
// string  `   =>  string
// object      =>  object