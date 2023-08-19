# MERN-STACK

Important sites - Omni Calculator.

## forEach, Array Mapping and Filter.

Using forEach you can not return anything.

To Overcome that problem we have something called as mapping.

Using mapping one can return anything.

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

