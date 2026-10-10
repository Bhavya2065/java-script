// Revision Note:
// 1. Object.getOwnPropertyDescriptor(obj, "prop")
//    - It shows the hidden meta-settings of an object's property.
//    - It returns:
//      - value: The actual value of the property.
//      - writable: If false, the property value cannot be changed.
//      - enumerable: If false, the property is hidden in loops (like for...of).
//      - configurable: If false, the property settings cannot be changed and it cannot be deleted.


Math.PI = 5;
console.log(Math.PI); // It is constant we can't declare a number on it


const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(discripter);

const masalatea = {
    name: 'rajwadi chai',
    price: '300',
    isAvailable: true,
    orderChi: function () {
        console.log(`Chai bn gai`);
    }
}

// console.log(typeof masalatea.orderChi); // function


// const discripterObj = Object.getOwnPropertyDescriptor(masalatea, "name");
// console.log(discripterObj);

Object.defineProperty(masalatea, 'name', {
    // writable: false,
    enumerable: false // Enumerable means "countable" or "loopable".
})

console.log(Object.getOwnPropertyDescriptor(masalatea, "name"));

for (const [key, value] of Object.entries(masalatea)) {
    // Note: Check 'value' here because 'key' is always a string (like "orderChi")
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}