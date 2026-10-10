// Syntax

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     ChnageUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const bhavesh = new User("Bhavesh", "fdsfdsfdsf", "123")
// console.log(bhavesh.encryptPassword());
// console.log(bhavesh.ChnageUsername());

// Note: Constructer are automatically called when the new keyword is defined

// Behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`
// }

// User.prototype.ChnageUsername = function() {
//     return `${this.username.toUpperCase()}`
// }

// const Bhaya = new User("Bhaya", "fdsfdsfdsf", "123")
// console.log(Bhaya.encryptPassword());
// console.log(Bhaya.ChnageUsername());