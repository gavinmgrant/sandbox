// Given a string, implement an algorithm to count the number of times a letter occurs.
// Count the number of times 'f' occurs in the input string below.

const input = 'Finally, the fish is ready to fry.';

const countLetter = str => {
    const array = str.toLowerCase().split('');
    const letterCount = {};
    array.forEach((letter) => {
        if (letter === 'f') {
            if (!letterCount[letter]) {
                letterCount[letter] = 1;
            } else {
                letterCount[letter]++;
            }
        }
    })
    return letterCount;
}

console.log(countLetter(input));