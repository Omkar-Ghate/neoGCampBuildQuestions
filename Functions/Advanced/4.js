/*
Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
*/

const reverseCharacterOfWord = sentence => sentence.split(" ").map(word=>word.split("").reverse().join("")).join(" ");

console.log(reverseCharacterOfWord("we are neoGrammers"));