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



