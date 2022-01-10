/*
Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5
*/

// using arrow function
const getLengthOfArray = numbers => numbers.length;
console.log(getLengthOfArray([1, 5, 3, 6, 8]));

// using argument object in normal functions
function getLengthOfArray2(){
    console.log(arguments);
    return arguments.length;
}
const arr = [1, 5, 3, 6, 8];
console.log(getLengthOfArray2(arr));// this would return 1 as the entire array is stored as a value of the first index of arguemtns object

// console.log(getLengthOfArray2(1, 5, 3, 6, 8)); // this would return 5 
