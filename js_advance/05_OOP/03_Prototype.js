let myName = "hitesh     "
let myChannel = "chai     "


// Problem: There is not any trueLength property exist but We have to make it so that we can use it for all variables
// Solution: 

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

myName.trueLength(); // trueLength means return the length after removing spacing 
myChannel.trueLength();

let myHeros = ["superman", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman} `);
    }
}

// If we define the prototype for object then It uses all even if it string, array, etc..
Object.prototype.bhavya = function () {
    console.log(`Hello Brother`);
}

// If we define the prototype for Array then It use only by Array, not Object
Array.prototype.hitesh = function () {
    console.log("Hitesh say hello");
}

heroPower.bhavya()
myHeros.bhavya()
myHeros.hitesh()
// heroPower.hitesh() // TypeError: heroPower.hitesh is not a function