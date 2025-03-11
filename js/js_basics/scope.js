// Use of scope( {} ): If we initialize the variable inside the scope and then printed outside of scope then error would be occure

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a); // Error: a is not define
// console.log(b); // Error: b is not define
console.log(c); // but c is printed so that it is not a good practices and we must avoid

let a =100 // Global scope
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a); // It print 10
}
console.log(a);
// for both node and console of browser the global scope is different (Sometimes may be asked in interview)

// *********************************** more about scope ***********************************

function Big() {
    const name = "Bhavya"
    function Small() {
        const website = "yt"
        console.log(name);
    }
    // console.log(website);
    Small()
}
Big()

// *********************************** Some interesting facts ***********************************

addone(2)
function addone(val) {
    return val + 1
}

console.log(addTwo(2)); // This generates error because the variable addTwo holds the functions
const addTwo = function(num){
    return num + 2
}
