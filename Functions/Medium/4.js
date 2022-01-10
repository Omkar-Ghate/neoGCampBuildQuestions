/*
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
*/
// merge using arrow function and the spread operator 
const mergeTwoArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeTwoArrays([1,3,5], [2,4,6]));

// using the arguments object in regular functions
function mergeTwoArrays2(){
    return ([...arguments[0], ...arguments[1]]);
}
console.log(mergeTwoArrays2([1,3,5], [2,4,6]));

