/*
  =============================================================================
  📌 IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
  =============================================================================
  
  1. What is an IIFE:
     - A function that executes immediately upon declaration.
     - Syntax: `(function() { ... })();` or `((name) => { ... })('arg');`

  2. Key Use Cases:
     - Prevents global scope pollution by creating a private local scope.
     - Immediately establishes initial state or connection setup (e.g., DB connection).

  3. Mandatory Rule:
     - Must end IIFE calls with a SEMICOLON `;` so JavaScript knows where the execution context terminates before executing the next block.
  =============================================================================
*/

// =============================================================================
// 📌 1. REGULAR FUNCTION VS IIFE (PREVENTING GLOBAL POLLUTION)
// =============================================================================

// Standard function declaration (Pollutes global namespace):
function chai() {
    console.log(`DB Connected!!`);
}
chai();

// Named IIFE (Creates private local scope immediately):
(function db(){
    console.log(`DB Connected!! perfectly`);
})(); // Note: Semicolon ';' is mandatory to terminate the execution context!

// =============================================================================
// 📌 2. PARAMETERIZED ARROW IIFE & INTERVIEW PATTERNS
// =============================================================================

// Unnamed Arrow IIFE with parameter passing:
((name) => {
    console.log(`${name} DB Connected!!`);
})('bhavya'); // Semicolon terminates context

// 💡 Interview Question: How to write multiple IIFEs in a single file?
// 👉 Answer: Always end each IIFE execution with a semicolon (;) so JavaScript knows where each context ends.