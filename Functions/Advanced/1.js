/*
Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const encodeString1 = (word, n) => {
    let charArray = word.split("");

    // find the index of given characters in the alphabets array
    let originalIndexArray = charArray.map(char => {
        let newCharIndex = alphabets.indexOf(char) + (n % 26);

        return newCharIndex > 25 ? newCharIndex - 26 : newCharIndex;
    })

    let newCharacterArray = originalIndexArray.map(index => alphabets[index]);

    let finalJoinedString = newCharacterArray.join("");

    return finalJoinedString;

}

// doing everything at once
const encodeString2 = (word, n) => word.split("").map(char => {
    let newCharIndex = alphabets.indexOf(char) + (n % 26);
    return newCharIndex > 25 ? newCharIndex - 26 : newCharIndex;
}).map(index=>alphabets[index]).join("");

console.log(encodeString1("neogcamp", 2));
console.log(encodeString2("neogcamp", 2));