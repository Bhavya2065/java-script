/*
  Generator Function — Easy English

  What it is:
    - A generator is a function written with `function*`.
    - Calling it gives a generator object instead of running the function.

  How it works:
    - Use `yield` to pause and return a value.
    - Call `next()` to continue and get the next value.
    - The function remembers its position between `next()` calls.

  Why use it:
    - Produce values one at a time (lazy), saving memory.
    - Handle sequences, streams, or step-by-step logic clearly.
    
  Short interview answer:
    "A generator is a function that can pause and resume with `yield`, returning
    values one at a time via the generator object's `next()` method."
*/

// Example of a simple generator function:
// function* log(a) {
//     yield a;
// }

// const generator = log(10);
// console.log(generator.next()); // { value: 10, done: false }
// console.log(generator.return()); // { value: undefined, done: true }

let num = 0;

function* infiniteSequence() {
  while (num < 5) {
    num++;
    // `yield` pauses and returns `num` until `next()` is called again.
    yield num;
  }
}

const seq = infiniteSequence();
console.log(seq.next()); // { value: 1, done: false }
console.log(seq.next()); // { value: 2, done: false }
console.log(seq.next()); // { value: 3, done: false }
console.log(seq.next()); // { value: 4, done: false }
console.log(seq.next()); // { value: 5, done: false }
console.log(seq.next()); // { value: undefined, done: true }