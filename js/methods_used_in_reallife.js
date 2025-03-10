// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter((num) => num>4 )
// console.log(newNums);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum.filter((num) => {
    return num > 4
})
// console.log(newNums);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumber = []
number.forEach((num) => {
    if (num > 4) {
        console.log(newNumber.push(num)) // It returns the length of an array which is 6 in this case
    }
})
console.log(newNumber);
console.log();

// ***************** How to take values or information from Dummy Database (Mimp) ***************** 

const userDatabase = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        age: 28,
        address: {
            street: "123 Maple Street",
            city: "Springfield",
            state: "IL",
            zipCode: "62701",
            country: "USA",
        },
        phone: "+1-555-123-4567",
        isActive: true,
        role: "customer",
        createdAt: "2023-01-15",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 34,
        address: {
            street: "456 Oak Avenue",
            city: "Boston",
            state: "MA",
            zipCode: "02108",
            country: "USA",
        },
        phone: "+1-555-987-6543",
        isActive: false,
        role: "customer",
        createdAt: "2023-02-10",
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 25,
        address: {
            street: "789 Pine Road",
            city: "Seattle",
            state: "WA",
            zipCode: "98101",
            country: "USA",
        },
        phone: "+1-555-555-5555",
        isActive: true,
        role: "admin",
        createdAt: "2023-03-05",
    },
    {
        id: 4,
        name: "Bob Brown",
        email: "bob.brown@example.com",
        age: 45,
        address: {
            street: "101 Elm Street",
            city: "Austin",
            state: "TX",
            zipCode: "73301",
            country: "USA",
        },
        phone: "+1-555-111-2222",
        isActive: true,
        role: "customer",
        createdAt: "2023-04-20",
    },
    {
        id: 5,
        name: "Emma Davis",
        email: "emma.davis@example.com",
        age: 30,
        address: {
            street: "202 Birch Lane",
            city: "Toronto",
            state: "ON",
            zipCode: "M5V 2T6",
            country: "Canada",
        },
        phone: "+1-416-555-3333",
        isActive: true,
        role: "customer",
        createdAt: "2023-05-12",
    },
    {
        id: 6,
        name: "Michael Lee",
        email: "michael.lee@example.com",
        age: 38,
        address: {
            street: "303 Cedar Court",
            city: "Phoenix",
            state: "AZ",
            zipCode: "85001",
            country: "USA",
        },
        phone: "+1-602-555-4444",
        isActive: true,
        role: "customer",
        createdAt: "2023-06-01",
    },
    {
        id: 7,
        name: "Sarah Wilson",
        email: "sarah.wilson@example.com",
        age: 27,
        address: {
            street: "404 Willow Drive",
            city: "Vancouver",
            state: "BC",
            zipCode: "V6B 3K9",
            country: "Canada",
        },
        phone: "+1-604-555-6666",
        isActive: true,
        role: "customer",
        createdAt: "2023-07-15",
    },
    {
        id: 8,
        name: "David Kim",
        email: "david.kim@example.com",
        age: 32,
        address: {
            street: "505 Spruce Way",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001",
            country: "USA",
        },
        phone: "+1-213-555-7777",
        isActive: false,
        role: "customer",
        createdAt: "2023-08-10",
    },
];

let detail = userDatabase.filter((pd) => {
    if (pd.age > 30) {
        console.log(pd.address);
        console.log();
    }
})
// console.log(detail);

detail = userDatabase.filter((pd) => {
    if (pd.age > 30) {
        let data = Object.values(pd.address) // It prints the values in array like this : [ 1, 2 ]
        console.log(data);
    }
})

detail = userDatabase.filter((pd) => {
    if (pd.age > 30) {
        let data = Object.entries(pd.address) // It prints like this : [ [a:1], [b:2] ]
        console.log(data);
    }
})

detail = userDatabase.filter((pd) => pd.age > 35 && pd.isActive === true)
console.log(detail);

// How to add 10 in all array numbers using map method
const Newnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const updatenum = Newnum.map((num) => num + 10)
console.log(updatenum);

// chaining
const AllNewnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myNewnum = AllNewnum.map((num) => num * 10).map((num) => num + 1).filter((num1) => num1 >= 40) 
// first num multiplied by 10 and add 1 to num using second map()
// Note: we can change the keyword from num to num1 for second method 
console.log(myNewnum);

// Method for add all values in arr 
const Myarr = [1,3,5,7]
const total = Myarr.reduce((accumulator,currentValue)=>{ // Here acc => accumulator and cval => current value(array first value at starting and updaed eith steps)
    console.log(accumulator);
    console.log(currentValue);
    console.log();
    return accumulator + currentValue
},0)
console.log(total); // It returns the total of all numbers in num
console.log();

// Exercise (Real life)

const obj = [
    {
        Coursename: 'js',
        price: 2999
    },
    {
        Coursename: 'java',
        price: 4999
    },
    {
        Coursename: 'AI',
        price: 3999
    },
    {
        Coursename: 'C++',
        price: 1999
    }
]
const price = obj.reduce((accumulator,item) => accumulator+item.price,0)
console.log(price);
