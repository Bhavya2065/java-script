/*
  =============================================================================
  📌 PRIMITIVE VS NON-PRIMITIVE (REFERENCE) DATATYPES
  =============================================================================
  
  1. Primitive Datatypes (7 Types):
     - Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
     - Characteristics: Immutable, stored by VALUE on Stack memory.
     - Pass-by-Value: Assigning copies the actual value; modifying copy leaves original untouched.
     - Example:
         let a = 10;
         let b = a; // b gets a copy of 10
         b = 20;    // a remains 10

  2. Non-Primitive / Reference Datatypes:
     - Types: Object, Array, Function.
     - Characteristics: Mutable, stored by REFERENCE on Heap memory.
     - Pass-by-Reference: Assigning copies the memory reference point.
     - Example:
         let user1 = { name: "Bhavya" };
         let user2 = user1; // user2 points to same memory location
         user2.name = "Divyansh"; // user1.name also becomes "Divyansh"
  =============================================================================
*/

// =============================================================================
// 📌 1. PRIMITIVE DATATYPES (7 TYPES - CALL BY VALUE)
// =============================================================================

// Primitive data types store single, fundamental values and are immutable.
// They are stored directly on the Stack memory (Pass-by-Value).

// 1. String
// 2. Number (Range: 2^53 - 1)
// 3. Boolean (true / false)
// 4. Null (standalone empty value)
// 5. Undefined (variable declared but not assigned)
// 6. Symbol (guaranteed unique identifier)
// 7. BigInt (for numbers larger than 2^53 - 1)

// Note: Primitive data types are pass-by-value because JavaScript copies 
// their actual value. Changes to a copy do NOT affect the original variable.

// =============================================================================
// 📌 2. NON-PRIMITIVE / REFERENCE DATATYPES (CALL BY REFERENCE)
// =============================================================================

// Non-primitive data types store collections of data and complex entities.
// Stored in Heap memory, and variables hold the memory reference (pointer).

// 1. Array
// 2. Object
// 3. Function

// Note: Non-primitive values are pass-by-reference because variables store 
// the object's reference address. Changes through one variable affect all references.

// =============================================================================
// 📌 3. TYPEOF OPERATOR RESULTS TABLE
// =============================================================================

// Variable Type   =>  typeof Return Value
// ----------------------------------------
// undefined       =>  "undefined"
// null            =>  "object" (historical JS bug)
// boolean         =>  "boolean"
// number          =>  "number"
// string          =>  "string"
// symbol          =>  "symbol"
// bigint          =>  "bigint"
// object          =>  "object"
// function        =>  "function" (function object)

// Note: JavaScript automatically determines variable types at runtime (Dynamically Typed Language).