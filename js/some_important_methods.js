// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter((num) => num>4 )
// console.log(newNums);

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNum.filter((num) => {
    return num > 4
} )
// console.log(newNums);
    
const number = [1,2,3,4,5,6,7,8,9,10]
const newNumber = []
number.forEach((num) => {
    if(num > 4)
    {
        console.log(newNumber.push(num))
    }
})
console.log(newNumber);
