/*
  =============================================================================
  📌 OPTIONAL CHAINING (?.) IN JAVASCRIPT
  =============================================================================
  
  1. What is Optional Chaining (`?.`):
     - Safely accesses deeply nested object properties without throwing a `TypeError`.
     - Returns `undefined` immediately if reference is `nullish` (`null` or `undefined`).

  2. Use Case:
     - Reading optional API payload fields safely.
     - Invoking optional callback functions safely (`obj.func?.()`).
     - Accessing dynamic array elements safely (`arr?.[index]`).
     - Example:
         console.log(user?.address?.city); // Output: undefined instead of crashing
  =============================================================================
*/

// ==========================================
// OPTIONAL CHAINING (?.) IN JAVASCRIPT
// ==========================================

const city = {
    name: 'surat',
    Address: 'athwagate',
    house: {
        flat: 'B/2',
        Apt: 'Santok'
    }
};

// ------------------------------------------
// 1. THE PROBLEM
// ------------------------------------------
// If we try to access a nested property of something that does not exist (is undefined or null):
console.log(city.area.flat); 
// CRASH: TypeError: Cannot read properties of undefined (reading 'flat')


// ------------------------------------------
// 2. THE SOLUTION: Optional Chaining (?.)
// ------------------------------------------
// The "?." operator checks if the property before it exists (is not null or undefined).
// If it does not exist, it safely returns 'undefined' immediately instead of crashing.
console.log(city.area?.flat); // Output: undefined (no crash!)


// ------------------------------------------
// 3. OPTIONAL: Fallback Value using Nullish Coalescing (??)
// ------------------------------------------
// If the result is undefined/null, we can use "??" to show a default value.
console.log(city.area?.flat ?? 'No flat'); // Output: 'No flat'


