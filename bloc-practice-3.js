// Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.
// - Input: `"Dad gave mom a Tesla as a racecar"`
// - Output: `Dad, mom, racecar, 3 Palindromes`

const countPalindromes = str => {
    // conver the string input into all lowercase letter and split the words as strings in a new array
    const array = str.toLowerCase().split(" ");
    // create an empty array to hold the results
    let results = [];
    // iterate with a for loop through array
    for (i = 0; i < array.length; i++) {
        // "string" variable will be each word in the array
        let string = array[i];
        // "check" variable will be the reverse version of the word above
        let check = string.split('').reverse().join('')
        // if they match and are more than 2 letters long, they are a palindrome and should be added to the "results" array
        if (check === string && string.length > 2) {
            results.push(string);
        }
    }

    return `${results}, ${results.length} Palindromes`;
}

console.log(countPalindromes("Dad gave mom a Tesla as a racecar"));