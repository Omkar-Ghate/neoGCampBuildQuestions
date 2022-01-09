// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const findNumberOfWords1 = sentence => {
    // trim the starting and ending spaces
    sentence = sentence.trim();

    // split the sentence into an array of words based on " "
    const wordsList = sentence.split(" ");

    // return the length of the wordsList array
    return wordsList.length;
}

// doing everything together
const findNumberOfWords2 = sentence => sentence.trim().split(" ").length;

 
console.log(findNumberOfWords1(" Hey! I am Omkar, I am learning Full Stack Development at neoG Camp. "));
console.log(findNumberOfWords2(" Hey! I am Omkar, I am learning Full Stack Development at neoG Camp. "));

