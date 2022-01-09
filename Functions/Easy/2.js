// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const findAreaOfHexagon = (length) => (3 * Math.sqrt(length)/2) * length * length;

console.log(findAreaOfHexagon(10));