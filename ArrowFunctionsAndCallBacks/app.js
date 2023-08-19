// function functionName() {
//     // logic
// }


// Arrow Function : 
functionName = (x) => {
    console.log(x);
}

functionName(5);


square = (n) => n*n;


console.log(square(4));

// callbacks 

// -> by default the javasccript is an asynchronous language.
// --> js never waits for the first task to be executed then it will execute the second task

console.log("task 1");
setTimeout(() => {
    console.log("task 2");
}, 2000);
console.log("task 3");


// callback is also a function .
// when callback will executed is the main point here.

// ex downloading an image from the net, do you know how long it will take.

// likewise the callback is executed when the task is done.


function taskDone() {
    console.log("task is done!!!");
}


let a = [1, 2, 3, 4, 5, 6, 7, 8]

a.forEach((n) => {
    console.log(n);
});

let arr = [1,2,3,4];


// forEach does not return anything.
let result = arr.forEach((a)=>{
     return a*a;
})

console.log(result)
