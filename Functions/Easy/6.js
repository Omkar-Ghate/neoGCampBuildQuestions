/*
Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
*/
// using normal if-else
const getTypeOfTriangle = (a, b, c) =>{
    if(a + b + c != 180)return "Not a Triangle";
    else if(a === b && b === c)return "Equilateral";
    else if(a == 90 || b == 90 || c == 90)return "Right angled Triangle";
    else if(a === b || b === c || a === c)return "Isosceles";
    else return "Scalene";
}

// using ternary operator
const getTypeOfTriangle2 = (a, b, c) => (a + b + c  != 180) ? "Not a triangle" : (a === b && b === c) ? "Equilateral" : (a == 90 || b == 90 || c == 90) ? "Right angled triangle" : (a === b || b === c || a === c) ? "Isosceles Triangle" : "Scalene";

console.log(getTypeOfTriangle2(60, 90, 30));