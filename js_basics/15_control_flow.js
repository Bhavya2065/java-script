/*
  =============================================================================
  📌 CONTROL FLOW & CONDITIONALS
  =============================================================================
  
  1. `if - else if - else`:
     - Evaluates conditions sequentially until one matches `true`.

  2. `switch - case`:
     - Matches expression against `case` values using strict equality (`===`).
     - `break` keyword prevents fall-through behavior to subsequent cases.

  3. Ternary Operator (`condition ? trueVal : falseVal`):
     - Concise single-line conditional check.
  =============================================================================
*/

// =============================================================================
// 📌 1. SWITCH-CASE STATEMENT & FALL-THROUGH BEHAVIOR
// =============================================================================

// Note: Without 'break', execution falls through and runs all subsequent cases 
// until a break or the end of the switch block is reached.

const month = "march";
switch (month) {
    case "January":
        console.log(1);
        break;
    case "feb":
        console.log(2);
        break;
    case 'march':
        console.log(3);
        // Note: Without break here, it falls through to print 4 and 5
    case "april":
        console.log(4);
    default:
        console.log(5);
}