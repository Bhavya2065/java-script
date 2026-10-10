function SetUsername(username) {
    this.username = username
    console.log(this); // [String: 'Mario'] { username: undefined }
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username) // undefined
    this.email = email;
    this.password = password;
}

const User1 = new CreateUser("Mario", "mario228@gmail.com", "123");
console.log(User1);

// Definition: .call() is a built-in JavaScript method that allows us to immediately invoke a function while explicitly setting the value of this. It also lets us pass arguments individually to that function.