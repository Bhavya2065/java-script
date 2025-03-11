// ********************************** comparisions *********************************** //

console.log(2>1);
console.log(5==5);
console.log("2">1); // It prints true.
console.log("02">1); // It prints true.

/* Note: while compare any two value first ensure that both value have same datatypes. */
{/* <mostly used> */}
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
{/* </mostly used> */}

/* Note: equality(==) and Other comparisions like <,<=,>,>= are work differently */
/* comparisons symbols convert null to 0, so 0>0(false) and 0>=0(true)  */
console.log(null == undefined); // true
console.log(null > undefined); // false
console.log("" == 0); // true
console.log("" >= 0); // true
console.log("" != 0); // false

{/* <mostly used> */}
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
{/* <mostly used> */}

// "===" -> strict check (means it checks the value as well as datatype also, If it is correct then return "true")
// example:
console.log("2" === 2); // false
console.log(null === 0); // false

