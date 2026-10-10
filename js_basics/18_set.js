/*
  =============================================================================
  📌 SET & MAP DATA STRUCTURES
  =============================================================================
  
  1. Set Object:
     - Collection of UNIQUE values of any type.
     - Automatically ignores duplicate elements.
     - Common Use Case: Removing duplicate elements from arrays.
     - Example:
         const uniqueArray = [...new Set([1, 2, 2, 3])]; // [1, 2, 3]

  2. Key Operations:
     - `.add(val)`, `.delete(val)`, `.has(val)`, `.size`, `.clear()`.
  =============================================================================
*/

// =============================================================================
// 📌 1. REMOVING DUPLICATES FROM ARRAYS USING SET & SPREAD OPERATOR
// =============================================================================

// `Set` automatically stores unique values and drops duplicates.
// Spreading `[...new Set(arr)]` converts the Set back into a clean Array.

function removeDuplicates(arr){
    let uniqueArr = [...new Set(arr)]; 
    return uniqueArr;
}

const uniqueList = removeDuplicates([1, 2, 2, 3, 3, 4]);
console.log(uniqueList); // Output: [1, 2, 3, 4]