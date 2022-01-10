/*
Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/

// using sort() method in JS. It arranges elements in alphabetical orderl To sort numbers we need to pass a compare function
const sortInAscendingOrder = array => {
    array.sort((a,b) => a - b);
    return array;
}
console.log(sortInAscendingOrder([100,83,32,9,45,61]));

// let array = [100,83,32,9,45,61];
// array.sort();
// console.log(array);