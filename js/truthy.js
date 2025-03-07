const userEmail = "abc123@gmail.com"

if (userEmail) { // It assume that it is true value
    console.log("Got user Email");
}
else{
    console.log("Do not get user email");
}

// Falsy value: 
// false, 0, 0n(BigInt), "", null, undefined, NaN, -0

// Truthy value:
// true, 1, [], {}, "0", 'false', " ", function(){}

// *********************************** How to check my array is empty or not **************************************

const array = []
if(array.length == 0) {
    console.log("array is empty");
}

// *********************************** How to check Object is empty or not **************************************

const obj = {}
if(Object.keys(obj).length == 0){
    console.log("Object is empty");
}

if(false == 0 && false == '' && 0 == ''){
    console.log("it is true"); // true
}

// Nullish coalescing operator (??) : null, undefined
// Mostly used in database

let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 10
val4 = undefined ?? null
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// ternary Operator
// syntax: Condition ? true : false

const score = 100
score == 100 ? console.log("true") : console.log("False") // easy to write 

// comparision

let score1 = 100
let score2 = 200

// both case have different working
if(score1 == 100 & score2 == 100) // This checks only first comparision
{
    console.log("true");
}
if(score1 == 100 && score2 == 200) // This checks both operations
{
    console.log("true");
}

// this both case working same
if(score1 == 200 | score2 == 200) 
{
    console.log("true");
}
if(score1 == 200 || score2 == 200) 
{
    console.log("true");
}


