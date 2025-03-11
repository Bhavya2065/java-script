// ************************* The main usage of this keyword *************************

const obj = {
    username: "Bhavya",
    age: 20,
    Welcome_message: function () {
        console.log(`${this.username}, Welcome to our Website`);
        // console.log(this); // "this" will print the current context means current value of all keys in obj Object
    }
}

obj.Welcome_message() // It prints the value for username "Bhavya" which is it's current value
obj.username = "Sam" // We change the value from Bhavya to Sam
obj.Welcome_message() // It prints the value for username "Sam" which is it's current value
console.log(this); // node environment refers the {} empty current context
// Note: the global object for "this" in browser is "Window" (Asked in interview)

function hello() {
    let uname = "Bhavya"
    console.log(this.uname); // It prints undefine
}
hello()

// ************************** Arrow function **************************

// explicite type
const Addnum = (num1, num2) => {
    return num1 + num2
}
console.log(Addnum(1, 2));

// implicite type
const Addtwo = (num1, num2) => ( num1 + num2 )
console.log(Addtwo(1, 2));

// How to take Object in arrow

const return_obj = (num1, num2) => ({username: "Divya"}) // Object must be return in ()
console.log(return_obj())