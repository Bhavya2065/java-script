/*
  =============================================================================
  📌 DATE & TIME IN JAVASCRIPT
  =============================================================================
  
  1. Date Object Initialization:
     - Month index is 0-based in array format (0 = January, 11 = December).
     - String formats like `"YYYY-MM-DD"` use 1-based months.
     - Example:
         new Date(2025, 0, 25); // Jan 25, 2025

  2. Date Formatting Methods:
     - `.toString()`, `.toISOString()`, `.toLocaleDateString()`, `.toLocaleString()`.
     - `Date.now()` returns current timestamp in milliseconds since Unix Epoch.

  3. Custom Localization:
     - `.toLocaleString('default', { weekday: "long", timeZone: "..." })`.
  =============================================================================
*/

// =============================================================================
// 📌 1. CURRENT DATE & FORMATTING METHODS
// =============================================================================

const date = new Date();
console.log(date); // format: yyyy/mm/dd
console.log(date.toString());
console.log(date.toISOString()); // It is same as normal date
console.log(date.toLocaleDateString());
console.log(date.toLocaleString()); // It convert any format into dd/mm/yyyy
console.log(date.toLocaleTimeString());
console.log(typeof date); // It refers to the object
console.log();

// =============================================================================
// 📌 2. CUSTOM DATE INSTANCES & TIMESTAMPS
// =============================================================================

const myDate = new Date(2025, 0, 25); // It takes 12:00:00 AM by default
// Here months are stored in 0-indexed format: 0 = January, 1 = February, etc.
console.log(myDate.toLocaleString());

const mynewDate = new Date(2025, 0, 25, 5, 10) // format: yyyy/mm/dd/hour/minuts/seconds
console.log(mynewDate.toLocaleString()); // It set 5 hour and 10 minuts

const mynewDate1 = new Date("2004-12-13")
console.log(mynewDate1.toLocaleString());
const firstdate = new Date("12-31-2004") // format: mm/dd/yyyy
console.log(firstdate.toLocaleString()); // convert: mm/dd/yyyy to dd/mm/yyyy

let mytimestamp = Date.now()
console.log(mytimestamp) // It is the total miliseconds from 1 jan 1970(Date Standards) to till this time
console.log(firstdate.getTime());
console.log(Date.now()); // It is in milliseconds
console.log(Math.floor(Date.now() / 1000)); // It converts it from milisecond to second without decimal
console.log();

// =============================================================================
// 📌 3. DATE LOCALIZATION & TIMEZONES
// =============================================================================

let newDate = new Date()
let Indiandate = newDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
// It is used to print the time according to indian Standards
let indianDate = newDate.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
let indianTime = newDate.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
console.log(Indiandate);
console.log(newDate.getDay()); // Sunday - Saturday : 0 - 6
console.log(newDate.getMonth() + 1); // (January gives 0 and so on)

// How to print the date and Time at a same time
console.log(`The current Date is ${newDate.toLocaleDateString()} and Time is ${newDate.toLocaleTimeString()}`);
console.log(`The current Date is ${indianDate} and Time is ${indianTime}`);

// It is according to US standards
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    hour: "numeric"
}));
