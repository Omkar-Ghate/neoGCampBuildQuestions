/*
Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript)
*/

// using the spread operator
const findMax1 = numbers => Math.max(...numbers);
console.log(findMax1([-2, 4, 19, 21, 2]));

// using arguments object 
function findMax2(){
    return Math.max(...arguments);
}
console.log(findMax2(-2, 4, 19, 21, 2));