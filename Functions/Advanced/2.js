/*
Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
*/

// using slice() method. We can use substring() method also in place of the slice() method
const getFirstLetterCapital = sentence =>{
    // convert it into an array of words
    let wordsList = sentence.split(" ");
    for(let i=0 ; i<wordsList.length ; i++){
        wordsList[i] = wordsList[i][0].toUpperCase() + wordsList[i].substring(1);
    }
    return wordsList.join(" ");
}

// doing everything together
const getFirstLetterCapital1 = sentence => sentence.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");

console.log(getFirstLetterCapital("hey! my name is omkar."));
console.log(getFirstLetterCapital1("hey! my name is omkar."));



