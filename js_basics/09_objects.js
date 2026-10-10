/*
  =============================================================================
  📌 OBJECTS, DESTRUCTURING & API JSON
  =============================================================================
  
  1. Object Literals vs Constructors:
     - Constructor (`Object.create()`): Creates object with specified prototype.
     - Prototype-less (`Object.create(null)`): Creates clean object with NO prototype (no default methods).
     - Literals (`{}`): Inherit from `Object.prototype`.

  2. Dynamic Keys & Symbols:
     - Computed Property Names: `[keyVar]: value` for dynamic keys in object literals.
     - Dynamic property addition on existing objects: `obj[keyVar] = value`.
     - Symbols as keys MUST use bracket syntax: `[mySym]: "keyvalue"`.

  3. Object Operations & Destructuring:
     - Merging: `Object.assign({}, obj1, obj2)` or Spread `{ ...obj1, ...obj2 }`.
     - Inspection: `Object.keys()`, `Object.values()`, `Object.entries()`.
     - Destructuring: `const { name: userName } = obj;`.

  4. JSON Operations:
     - `JSON.stringify(obj)`: Converts JS object to JSON string format.
     - `JSON.parse(str)`: Converts valid JSON string format to JS object.

  5. Constructor Functions & Naming Conventions:
     - Normal functions use `camelCase` (e.g., `calculateTotal()`).
     - Constructor functions use `PascalCase` (e.g., `Person()`) and are invoked with `new`.

  6. ES6 Classes:
     - Modern replacement for legacy function constructors to write clean OOP code.
  =============================================================================
*/

// =============================================================================
// 📌 1. OBJECT LITERALS & PROPERTY ACCESS METHODS
// =============================================================================

const newobj = {
    name: "Sahil",
    age: 23
}
// In js engine the keys if object store as string
const num = 2

newobj.city = "surat" // Method: 1
newobj["country"] = "India" // Method: 2 (In js engine the keys if object store as string, so that we have use string to access the value)
newobj["1"] = 3
newobj[`${num}`] = 4

console.log(newobj);

// Note: 

// two ways to declare an object:
// 1) constructor (Always made singleton Object)
// 2) literel (Not made singleton Object)

// Object: literal
const Jsuser = {
    name: "Bhavya", // Javascript compiler treat name key as string("name")
    "full Name": "Bhavya Dani",
    age: 15,
    email: "sanjivdani123@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["Monday", "Saturday"]
}

// How to access this values
// two types:
console.log(Jsuser.email); // (1)
console.log(Jsuser["email"]); // (2)
console.log(Jsuser["full Name"]); // There is no other way to print this value
console.log();

//  Interview Question: Define One symbol and change it's value in object and retreive it 

const mySymbol = Symbol("key1")

const obj = {
    name: "divyansh",
    [mySymbol]: 200
}
console.log(obj[mySymbol]); // 200
console.log(typeof obj[mySymbol]); // number
// console.log(obj.mySymbol); // This is totally Wrong method to retrive this data
console.log(obj);
console.log();

// =============================================================================
// 📌 2. DYNAMIC ADDITION OF KEY VALUE IN OBJECT
// =============================================================================

// Method 1: Computed Property Names in Object Literal (using [key]: value)
const key = "firstName";
const value = "bhavya";

const dynamicUser = {
    [key]: value // dynamic key evaluates variable 'key' -> { firstName: "bhavya" }
};

console.log(dynamicUser.firstName); // "bhavya"
console.log(dynamicUser[key]);       // "bhavya"

// Method 2: Dynamic Key Addition on Existing Object (using obj[key] = value)
const dynamicKey2 = "role";
dynamicUser[dynamicKey2] = "Admin";
console.log(dynamicUser); // { firstName: 'bhavya', role: 'Admin' }
console.log();

// =============================================================================
// 📌 3. MUTATING OBJECT VALUES
// =============================================================================

Jsuser.age = 20
Jsuser["full Name"] = "Bhavy Shah"
console.log(Jsuser.age);
console.log(Jsuser["full Name"]);
// This all changes are appllying in Jsuser means all values are update in real time (Changes the original object)
console.log();

// =============================================================================
// 📌 4. OBJECT.FREEZE() (IMMUTABILITY)
// =============================================================================

console.log(Jsuser);
// Object.freeze(Jsuser) // It freeze the Object and values in this object doesn't change
Jsuser.age = 22 // doesn't change the value
console.log(Jsuser.age); // It's value doesn't change from 20 to 22
console.log();

// How to give greetings to object
// Note: To give greetings to object, first we comment the freeze functionality because it locks the all values

Jsuser.greetings = function () {
    return `Hello Js User`;
}

Jsuser.greetings1 = function () {
    return `Hello Js User, ${Jsuser["full Name"]}`;
}

console.log(Jsuser.greetings());
console.log(Jsuser.greetings1());
console.log();

// =============================================================================
// 📌 5. MERGING OBJECTS (OBJECT.ASSIGN VS SPREAD)
// =============================================================================

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// --- Case 1: Target is Empty Object `{}` ---

// syntax:
// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

const obj3 = Object.assign({}, obj1, obj2)
// Here first element ( {} ) is target and other elements are source 
console.log("Object 3 is:", obj3);
// Note: Here `{}` is the target so that the all object values can stored in this curly brases

// --- Case 2: Target is Existing Object `obj1` ---

const obj4 = Object.assign(obj1, obj2)
console.log(obj4); // Here target is the obj1   
console.log(obj3 == obj4);
// It gives fales because the target is changed for both cases

// =============================================================================
// 📌 6. OBJECT REFERENCE EQUALITY (===)
// =============================================================================
const object1 = { name: "Alice" };
const object2 = { name: "Alice" };
const object3 = object1;

console.log(object1 === object2);  // false (different references, even though content is same)
console.log(object1 === object3);  // true (same reference)
console.log();

// Second Method

const obj5 = { ...obj1, ...obj2 } // best method

console.log(obj5);
console.log();

// =============================================================================
// 📌 7. ARRAY OF OBJECTS & OBJECT UTILITY METHODS (KEYS, VALUES, ENTRIES)
// =============================================================================
console.log("How to take value from database (mIMP)");
const user = [
    {
        name: "Bhavya",
        age: 20,
        email: "sanjiv@gmail.com"
    },
    {
        name: "Divyansh",
        age: 22,
        email: "divyansh@gmail.com"
    },
    {
        name: "Neelam",
        age: 47,
        email: "neelam@gmail.com"
    }
]

console.log(user[1].age);
console.log(user[1].email);
console.log(Object.keys(Jsuser)); // The output should be in array
// we retrive the keys of object Jsuser
console.log(Object.values(Jsuser)); // Same as it gives the values of that keys
console.log(Object.entries(Jsuser)); // It gives array under array
console.log(Jsuser.hasOwnProperty('email')); // It checks that Jsuser have this key or not
console.log();

// =============================================================================
// 📌 8. OBJECT DESTRUCTURING & ALIASING
// =============================================================================

const course = {
    coursename: "Java script",
    price: 999,
    Coursementor: "Hitesh"
}

// two methods to retrive data 
console.log(course.Coursementor); // 1 
const { Coursementor: instructor } = course // 2 : this method used when retrive data more than one time
// We can take small name instructor instead of Coursementor as above and when we call it then It will output Hitesh
console.log(instructor);
console.log();

// --- Destructuring with Default Values & Renaming ---
const studentObj = {
    name: "Ajay",
    age: 22
};

// 1. Default Value: used when the property is undefined in the object
// const { name = 'Bhavya', age = 23, city = 'Surat' } = studentObj;

// 2. Property Renaming (Aliasing): gives a new variable name
const { name: username, age } = studentObj;
console.log(username, age); // Ajay 22

// 3. Renaming + Default Value combined:
// const { name: userName = 'DefaultName', role: userRole = 'Guest' } = studentObj;

// --- Nested Object Destructuring ---
const nestedUser = {
    id: 101,
    fullname: {
        first: "Anu",
        last: "Malik"
    }
};

// Extracts nested properties directly ('first', 'last' become variables; 'fullname' itself is NOT a variable)
const { fullname: { first, last } } = nestedUser;
console.log(first, last); // "Anu Malik"

const object = { name: "John", age: 25 };
console.log(Object.keys(object));   // ["name", "age"]
console.log(Object.values(object)); // ["John", 25]
console.log(Object.entries(object));// [["name", "John"], ["age", 25]]

// =============================================================================
// 📌 9. OVERRIDING OBJECT PROPERTIES (SPREAD OPERATOR)
// =============================================================================

const Newobject = {
    button: "pay",
    action: "Payment is done!!"
}

const updatedObj = {
    ...Newobject, action: "Payment is already received!!"
}
console.log(updatedObj);
console.log();

// =============================================================================
// 📌 10. SHALLOW COPY VS DEEP COPY
// =============================================================================

// 1. Shallow Copy (Spread Operator `...` or `Object.assign`):
//    - Only copies top-level properties.
//    - Nested objects still share the SAME Heap memory reference!

const originalObj = {
    name: "Ajay",
    address: {
        city: "Delhi"
    }
};

const shallowCopy = {
    ...originalObj
};

shallowCopy.address.city = "Mumbai";
console.log(originalObj.address.city); // "Mumbai" (Nested reference was shared)

// 2. Deep Copy (JSON.parse + JSON.stringify):
//    - JSON.stringify() converts the object to a plain string.
//    - JSON.parse() parses the string and creates BRAND-NEW objects in Heap memory with new references.
//    - Changes to nested objects in deepCopy do NOT affect originalObj.

const deepObj = {
    name: "Ajay",
    address: {
        city: "Delhi"
    }
};

const deepCopy = JSON.parse(JSON.stringify(deepObj));
deepCopy.address.city = "Mumbai";

console.log(deepObj.address.city);  // "Delhi" (Original stays unchanged!)
console.log(deepCopy.address.city); // "Mumbai"
console.log();

// =============================================================================
// 📌 11. PROTOTYPE-LESS OBJECTS (OBJECT.CREATE(NULL))
// =============================================================================
// Object.create(null) creates a 100% clean object that does NOT inherit the Object properties or methods from Object.prototype.
// Built-in methods (like .hasOwnProperty(), .toString(), .valueOf()) are NOT attached.

const cleanObj = Object.create(null);
cleanObj.name = "Bob";

console.log(cleanObj.name); // Output: Bob
console.log(cleanObj.toString); // Output: undefined (No prototype chain)

// ❌ Calling cleanObj.hasOwnProperty("name") throws:
// TypeError: cleanObj.hasOwnProperty is not a function

// ✅ Safe property check alternatives:
console.log("name" in cleanObj); // true (using 'in' operator)
console.log(Object.hasOwn(cleanObj, "name")); // true (ES2022+ recommended)
console.log(Object.prototype.hasOwnProperty.call(cleanObj, "name")); // true
console.log();

// =============================================================================
// 📌 12. JSON (JAVASCRIPT OBJECT NOTATION) METHODS
// =============================================================================
// JSON is a standard text-based format for representing structured data.
// 1. JSON.stringify() -> Converts a JavaScript object into a JSON string.
// 2. JSON.parse()     -> Converts a valid JSON formatted string back into a JavaScript object.
//
// ⚠️ Note: In a JSON string, all keys and string values MUST be wrapped in double quotes ("").

const jsObject = { key: "b" };

// Converting JS Object -> JSON String
const jsonString = JSON.stringify(jsObject);
console.log(jsonString);        // '{"key":"b"}'
console.log(typeof jsonString); // "string"

// Converting JSON String -> JS Object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);        // { key: 'b' }
console.log(typeof parsedObject); // "object"

// --- JSON.stringify(value, replacer, space) Optional Parameters ---
// replacer (Array/Function): Filters or transforms properties.
// space (Number/String): Adds indentation for readable / pretty-printed JSON.

const gameSettings = {
    username: "Piyush",
    level: 19,
    health: 90
};

// 1. Array Replacer (Whitelists only specified keys):
const filteredData = JSON.stringify(gameSettings, ["level", "health"]);
console.log(filteredData); // '{"level":19,"health":90}'

// 2. Formatting / Pretty-print (using space parameter):
const prettyJSON = JSON.stringify(gameSettings, null, 2);
console.log(prettyJSON);

// =============================================================================
// 📌 13. HOW CONSTRUCTOR FUNCTION AND NORMAL FUNCTION CALL WORKS?
// =============================================================================
// 📝 Naming Convention:
// - Normal Functions: Use camelCase (e.g., calculateTotal(), getUserData())
// - Constructor Functions: Use PascalCase (e.g., Person(), User(), Car())
//   (Capital first letter indicates it is designed to be called with 'new')

function Person(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    console.log(this);
}

// Case 1: Normal Function Call (Without 'new')
// - When called normally, 'this' refers to the Global object ('global' in Node.js / 'window' in browser).
// - It accidentally adds fname, lname, and contact to the global scope.
// - It does NOT return a new object.
Person("Reftar", "Singh", 8687565786);

// Case 2: Constructor Function Call (With 'new')
// - When called with 'new', JavaScript does 4 things behind the scenes:
//   1. Creates a brand new empty object: {}
//   2. Points 'this' to that new object.
//   3. Adds all properties (fname, lname, contact) onto this new object.
//   4. Automatically returns that new object.
const userObj = new Person("Reftar", "Singh", 8687565786);

// Accessing properties using dot notation:
console.log(userObj.fname);   // Output: "Reftar"
console.log(userObj.lname);   // Output: "Singh"
console.log(userObj.contact); // Output: 8687565786

// =============================================================================
// 📌 14. ES6 CLASS SYNTAX (MODERN REPLACEMENT FOR FUNCTION CONSTRUCTORS)
// =============================================================================
// ⚠️ Note: In modern JavaScript (ES6+), the old function constructor pattern is
// legacy/replaced by the modern 'class' syntax (syntactic sugar over prototypes).
// 'class' makes Object-Oriented Programming (OOP) cleaner, readable, and safer.

class ModernPerson {
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }

    getContact() {
        return this.contact;
    }
}

const person1 = new ModernPerson("Badshah", "Salamat", 564848894);
console.log(person1.getFullName()); // Output: "Badshah Salamat"
console.log(person1.getContact());  // Output: 564848894




