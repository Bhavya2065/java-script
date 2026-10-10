// Lexical Scoping

function parentContainer() {
    const name = "Bhavya";
    function childContainer() {
        console.log(name);
    }
    childContainer()
}
parentContainer()

// Closure Example

function parentContainer() {
    const role = "Bhavya";
    function childContainer() {
        console.log(role);
    }
    return childContainer
}
const fn = parentContainer()
fn()

// Behind the scene: When we store the fn variable not only hold the function but also it's lexical scoping means it also store the variable name = "Bhavya" in memory 
