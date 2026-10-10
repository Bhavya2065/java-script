
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