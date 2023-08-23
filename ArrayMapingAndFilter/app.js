let arr = [1, 2, 3, 4];

let result = arr.map((number) => {
    return number * number;
});

console.log(result);

// returns an array of squares.

const indianPeople = [
    {
        firstName: "Amit",
        lastName: "Patel",
        age: 28,
        gender: "Male"
    },
    {
        firstName: "Priya",
        lastName: "Sharma",
        age: 24,
        gender: "Female"
    },
    {
        firstName: "Rahul",
        lastName: "Verma",
        age: 32,
        gender: "Male"
    },
    {
        firstName: "Sneha",
        lastName: "Gupta",
        age: 29,
        gender: "Female"
    },
    {
        firstName: "Rajesh",
        lastName: "Kumar",
        age: 45,
        gender: "Male"
    },
    {
        firstName: "Anjali",
        lastName: "Singh",
        age: 27,
        gender: "Female"
    },
    {
        firstName: "Vikram",
        lastName: "Joshi",
        age: 31,
        gender: "Male"
    },
    {
        firstName: "Neha",
        lastName: "Mehta",
        age: 22,
        gender: "Female"
    },
    {
        firstName: "Amitabh",
        lastName: "Das",
        age: 50,
        gender: "Male"
    },
    {
        firstName: "Sarika",
        lastName: "Pandey",
        age: 26,
        gender: "Female"
    }
];

console.log(indianPeople);


// how to get the first name of all the persons

let firstNames = indianPeople.forEach((user)=>{
    console.log(user.firstName);
    // return user.firstName; 
});

console.log(firstNames);

// I want to store them in an array ? 

let firstName = indianPeople.map((user) =>{
    return user.firstName + " " + user.lastName;
});

console.log(firstName);

// this process is called as chaining.

let females = indianPeople.filter((user) => {
    return user.gender == "Female";
}).map((user) => {
    return user.firstName;
})

console.log("females are" ,females);

let males = indianPeople.filter((users)=>{
    if(users.gender == 'Male' && users.age > 35) {
        return users;
    }

    // one-liner : return (users.gender == 'Male' && users.age > 35)
}).map((users) => {
    return users.firstName;
})

console.log("Males are : ",males);
