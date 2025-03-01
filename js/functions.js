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

console.log(loginUser()); // If we don't pass any value then it print undefined
