/*
  =============================================================================
  📌 STACK AND HEAP MEMORY ALLOCATION
  =============================================================================
  
  1. Stack Memory (Primitive Types):
     - Fast, fixed size execution memory.
     - Holds primitive values directly.
     - Assigning variable to another creates a standalone COPY.
     - Example:
         let x = 10;
         let y = x; // Copy created in Stack

  2. Heap Memory (Non-Primitive / Reference Types):
     - Dynamic size memory for complex objects.
     - Holds actual object data; Stack variable holds REFERENCE address pointing to Heap memory.
     - Assigning object variable copies the memory address (Reference).
     - Example:
         let u1 = { email: "user@google.com" };
         let u2 = u1; // u2 holds reference to same Heap address
  =============================================================================
*/

// =============================================================================
// 📌 1. STACK MEMORY (PRIMITIVE DATATYPES - PASS BY VALUE)
// =============================================================================
// Stack stores copies of primitive datatypes. Modifying one copy doesn't affect the other.

let id = 123;
let anotherid = 456;
id = anotherid;  // compiler generates the copy of the id and put at the top of the stack, so that if we change the value of id then id doesn't change but changes in copy of id.
console.log(id);
console.log(anotherid);


// =============================================================================
// 📌 2. HEAP MEMORY (NON-PRIMITIVE DATATYPES - PASS BY REFERENCE)
// =============================================================================
// Heap stores actual object data. Variables hold the reference (pointer address).

let obj = {
    name: "John due",
    age: 20
}
let obj1 = obj;
obj.age = 21;

console.log(obj.age);  // 21
console.log(obj1.age); // 21
// obj1 age is also changed to 21 because the Object and array are stored in heap memory in js so both have the same reference(reference means pointer means same address) so one change the affects the another one. 

// =============================================================================
// 📌 3. REASSIGNMENT VS MUTATION (IMPORTANT INTERVIEW QUESTION)
// =============================================================================
// Reassigning a variable (`user = null`) only cuts that variable's pointer.
// Mutating a property (`user.name = null`) changes the shared object in Heap memory!

// Case 1: Reassigning the Variable (Cuts only this variable's pointer)
let userA = { name: "Samay" };
const memberA = [userA];
userA = null; 
console.log(memberA); // [ { name: 'Samay' } ] -> Array item is NOT affected!

// Case 2: Mutating the Object Property (Affects shared Heap data)
let userB = { name: "Samay" };
const memberB = [userB];
userB.name = null;
console.log(memberB); // [ { name: null } ] -> Array item IS affected!
console.log();

// =============================================================================
// 📌 SUMMARY: STACK VS HEAP
// =============================================================================
// Stack Memory (Primitive)      ---> Provides a standalone copy of the variable
// Heap Memory (Non-Primitive)   ---> Provides a shared reference address to the object 


// Still not understand than refer this video: https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10