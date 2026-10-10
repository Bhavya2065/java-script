// ==============================================================================
// 1. PROMISE DEFINITION & STATES
// ==============================================================================
// Promises handle asynchronous operations (operations that take time to complete).
// They represent a future result and avoid deep callback nesting (callback hell).
//
// A Promise is always in one of three states:
//   - pending: Initial state, neither fulfilled nor rejected.
//   - fulfilled: Operation completed successfully (resolve).
//   - rejected: Operation failed (reject).

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done!");
    }, 2000);
});

console.log(typeof promise); // Output: "object"

promise.then(function (value) {
    console.log(`Promise Resolved with msg: ${value}`);
}).catch(function () {
    console.log("Error Encountered!!");
});


// ==============================================================================
// 2. PROMISE CHAINING & ERROR HANDLING (.then / .catch / .finally)
// ==============================================================================

const promiseTwo = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve({ username: "abc", password: "123" });
    } else {
        reject(`ERROR: Something went wrong`);
    }
});

promiseTwo
    .then((userObj) => {
        console.log(userObj);
        return userObj.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log(`All things Resolved!!`);
    });


// ==============================================================================
// 3. ASYNC / AWAIT WITH PROMISES
// ==============================================================================

const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error) {
            resolve({ username: "JS", password: "123" });
        } else {
            reject(`ERROR: JS went wrong`);
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// ==============================================================================
// 4. FETCHING API DATA (async/await vs .then chaining)
// ==============================================================================

// Approach A: Using async...await with try...catch
async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUser();

// Approach B: Using Promise Chaining (.then / .catch)
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

// Note: When returning data inside a .then() block, another .then() is needed to handle that returned Promise data.


// ==============================================================================
// 5. PROMISE COMBINATORS (Promise.all, allSettled, race, any)
// ==============================================================================

// --- A. Promise.all() ---
// Short-circuits immediately if ANY promise rejects.
// Returns an array of resolved values if ALL succeed.
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
.then((results) => console.log(results))
.catch((error) => console.error(error));

// --- B. Promise.allSettled() ---
// Waits for ALL promises to settle (resolve or reject).
// Returns an array of result objects containing status and value/reason.
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
.then((results) => console.log(results));

// --- C. Promise.race() ---
// Settles as soon as the FIRST promise settles (resolves or rejects).
Promise.race([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task 2 finished"), 0)),
])
.then((result) => console.log(result))
.catch(err => console.error(err));

// --- D. Promise.any() ---
// Resolves as soon as ANY single promise resolves (ignores rejections unless all fail).
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
.then((result) => console.log(result))
.catch((error) => console.error(error));


// ==============================================================================
// 6. PRACTICE & UTILITY EXAMPLES
// ==============================================================================

// Example: Adding values from two promises using async/await
// var addTwoPromises = async function (promise1, promise2) {
//     console.log(await promise1 + await promise2);
// };
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// addTwoPromises(promise1, promise2)
