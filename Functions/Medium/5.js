/*
Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c
*/

// directly accessing character at given index
const findCharAt2 = (word, index) => word[index];
console.log(findCharAt2("neoGcamp", 4));

// using charAt() method 
const findCharAt = (word, index) => word.charAt(index);

console.log(findCharAt("neoGcamp", 4));


