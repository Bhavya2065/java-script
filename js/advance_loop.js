// for of loop

let arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "Hello World!!"
for (const greet of greeting) {
    if (greet == " ") {
        break
    }
    console.log(greet); // It elleborate each and every words from string and break while space is arrive
}


// New datatype Map
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('EN', 'England')
map.set('FR', 'France')
console.log(map);

for (const [key,value] of map) {
    // console.log(key,' => ',value); // First way of print the values 
    console.log(`${key} => ${value}`); // Best way to print the values
}


// How to iterate object => using forin loop we can iterate object

const obj = {
    game1: "NFS",
    game2: "Free Fire"
}

for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
    
}

// Other use case of forin loop

const pro_lan = ["java","python","ruby","flutter","js","c++"]
for (const language in pro_lan) {
    // console.log(language); // it prints the index of values
    console.log(`${language} => ${pro_lan[language]}`); 
}

const map1 = new Map() // Map is not iteratable
map1.set('IN', 'India')
map1.set('USA', 'United States of America')
map1.set('EN', 'England')
map1.set('FR', 'France')

for (const key in map1) {
    console.log(key); // Map is not iteratable so that doesn't print the output
}

// for each loop

const coding = ["java","python","ruby","flutter","js","c++"]

// coding.forEach(function (item){
//     console.log(item);
// }) 
// first method to print value using foreach function

coding.forEach((item) => console.log(item)) 
// second and best way to print array value

coding.forEach((item) => {
    console.log(item)
}) 
// third way to print array value

function print(item) {
    console.log(item);
}
coding.forEach(print)
// fourth way to print array value

// MIMP: how to fetch values from database using loops

const study = [
    {
        languagename: "c++",
        extensionname: "cpp"
    },
    {
        languagename: "java",
        extensionname: "java"
    },
    {
        languagename: "javascript",
        extensionname: "js"
    }
]

// study.forEach((item) => {
//     console.log(item);
//     console.log(item.languagename);
//     console.log(item.extensionname);
// })

study.forEach((item) => {
    console.log(`${item.languagename} => ${item.extensionname}`);
})