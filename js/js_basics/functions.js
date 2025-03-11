// function AddtoNum(num1, num2) {
//     console.log(num1 + num2);
// }
// AddtoNum(3, 5)
// AddtoNum(3.5, 5)
// AddtoNum(true, 2) // true --> 1
// AddtoNum("Bhavya", 2)
// AddtoNum("4", 2)
// AddtoNum("4", "2")
// AddtoNum(4, "2")
// AddtoNum(4, null)
// console.log();

function AddtoNum(num1, num2) {
    const Sum = num1 + num2;
    return Sum
    console.log("bhavya"); // It is not print in output because after return the values no other function code will be execured
}

const Sum = AddtoNum(3, 6)
// console.log(Sum);

function loginUser(username = "Sam") {
    if(username == undefined) {
        return 0
    }
    return `${username} is logged in`
}

// console.log(loginUser()); // If we don't pass any value then it print undefined
// console.log();

// ********************* data return technique ***************************

function CalculatePrice(...num1) { // where I put ... before any value than it is either the rest operator or spread operator, In this case it is rest operator than How can I identify that we will see in next chapetrs.
    return num1
}
console.log(CalculatePrice(200, 300, 400));

// Use of rest operator(...) : If the passing argument is larger than the parameter size than it returns the array of those passing parameters

function Price(val1, val2, ...num1) {
    return num1 // It returns only [ 300, 4000 ]
}
console.log(Price(100, 200 ,300, 4000)); 

// val1 = 100 , val2 = 200 and rest values makes array form and return them 


// ******************************** How to pass the Object in function **********************************

const Obj = {
    username: "Jinang",
    age: 22
}

function Handleobj(object) {
    console.log(`Username: ${object.username} and Age: ${object.age}`);
}
Handleobj(Obj)
Handleobj({
    username: "Sam",
    // Age: 25 // Always check the spelling of the key vlaues
    age: 25
}) // we can pass directly the all values

// ******************************** How to pass the array in function **********************************

const array = [10,20,30,40,50]
function handleArray(array) {
    return array
}
const getArray = handleArray(array)
console.log(getArray);
// we can write also the above syntax without return as same as in object passing case

// *********************************** Other way to Define function ***********************************************

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(2));
