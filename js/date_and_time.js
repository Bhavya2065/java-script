// *************************** Date and Time Methods *********************************

const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toISOString()); // It is same as normal date
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(typeof date); // It refers to the object
console.log();

const myDate = new Date(2025, 0, 25); // It takes 12:00:00 AM by default
// Output: 1/12/2025, Here the date is not 1 but we pass the 0, because when we pass the Date manually then it stores as array and array is always starts from zero
console.log(myDate.toLocaleString());

const mynewDate = new Date(2025, 0, 25, 5, 10)
console.log(mynewDate.toLocaleString()); // It set 5 hour and 10 minuts

const mynewDate1 = new Date("2004-12-13")
console.log(mynewDate1.toLocaleString());
const firstdate = new Date("12-31-2004") // format: mm/dd/yyyy
console.log(firstdate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp) // It is the total miliseconds from 1 jan 1970(Date Standards) to till this time
console.log(firstdate.getTime());
console.log(Date.now()); // It is in milliseconds
console.log(Math.floor(Date.now() / 1000)); // It converts it from milisecond to second without decimal
console.log();

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
