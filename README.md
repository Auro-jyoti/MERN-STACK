# MERN-STACK

Important sites - Omni Calculator.

## forEach, Array Mapping and Filter.

Using forEach you can not return anything.

If you try to return anything using forEach you will get undefined, which tells that forEach can not return any value.

To Overcome that problem we have something called as mapping.

Using mapping one can return anything.

one more difference is that we can not do chaining using forEach where as we can use map, filter etc to achieve chaining.

## Points to Remember :

There are methods in javascript that modify the original array and there are certain methods in javascript that make a copy of the original array and then make any changes to it.

Methods that modify the original array are :

1. push().
2. pop().
3. shift().
4. unshift().
5. splice().
6. sort().
7. reverse().


Methods that make a copy of the original array are :

1. concat().
2. slice().
3. map().
4. filter().
5. reduce().
6. flatMap().


## How to check if the original array is modified or not.

const originalArray = [1, 2, 3, 4, 5];

const copiedArray = [...originalArray];

copiedArray.push(6);

if(copiedArray === originalArray) {
    console.log("The original array was modified");
} else {
    console.log("The origninal array was not modified");
}

## Difference between innerText and innerHTML

1. innerText only returns the text within the tags.

2. innerHTML returns tags along with all the children tags present within the parent element.

<div id="myDiv"><p>This is <strong>inner Text</strong></p></div>

const myElement = document.getElementById("myDiv");
console.log(myElement.innerText)

--> gives output as This is inner Text

console.log(myElement.innerHTML)

--> gives output as <p>This is <strong>inner Text</strong></p>


## Promises:

In javascript normal code executes line by line.
what if some line of code takes some more time to execute?

Example: c
console.log("task1")
<!-- console.log('task2') -->
console.log("task3")


setTimeout(() => {
    console.log("task2");
}, 1000);

Here we want the javascript to wait until and unless a certain task is done !!!

Thats where Promises come into picture!!

In real world you can say:
    Although it is not my general phenomena
    but I promise I will wait untill and unless the task is completed and then I will move to execute the next task.

