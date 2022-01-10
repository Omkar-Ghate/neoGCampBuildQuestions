/*
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
*/

// using indexOf method in JS: it can be used for both string and array
const getIndexOfElement = (element, array) => array.indexOf(element);
console.log(getIndexOfElement(3, [1, 6, 3, 5, 8, 9]));
