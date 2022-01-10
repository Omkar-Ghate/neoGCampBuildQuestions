/*Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript)
*/

// using the implicit arguments object in regular functions
function findMin1(){
    // arguements is an implicit array-like object that stores all the arguments passed on to a function. It DOES NOT work with arrow functions. 
    // In arguments object, the key is a string which is the index, and the value is the actual argument being passed
    // read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

    // console.log(typeof(Object.keys(arguments)[0]));

    console.log(arguments, typeof arguments, Array.isArray(arguments));
    
    return Math.min(...arguments);
}

// console.log(findMin1(1, 3, -2, 4, 8, -5));

// using ...rest or (spread operator) in JS
const findMin2 = numbers => Math.min(...numbers);
console.log(findMin2([1, 3, -2, 4, 8, -5]));
 