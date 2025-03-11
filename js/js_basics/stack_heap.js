// Stack: All primitive datatypes uses the Stack memory.
// stack creates the copy of datatypes
// for eg.

let id = 123;
let anotherid = 456;
id = anotherid;  // compiler generates the copy of the id and put at the top of the stack, so that if we change the value of id then id doesn't change but changes in copy of id.
console.log(id);
console.log(anotherid);


// Heap: All non primitive datatypes uses the heap memory.
// It gives the reference of variable
// for eg.

let obj = {
    name: "John due",
    age: 20
}
let obj1 = obj;
obj.age = 21;

console.log(obj.age);  // 21
console.log(obj1.age); // 21
// Both changes because obj1 reference to obj variable and if it is change than obj1 is also change.


// Still not understand than refer this video: https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10