// Given a document, implement an algorithm to count the number of word occurrences.
// Be sure to omit punctuations from your results so the word count is accurate.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `hello = 1, there = 1, how = 2, are = 1, you = 2`

const countWords = str => {
    const lettersArr = str.toLowerCase().split('');

    lettersArr.forEach((letter, index) => {
        if (letter === ',' || letter === '?') {
            lettersArr.splice(index, 1)
        }
    })

    const strArr = lettersArr.join('').split(' ');
    let words = {};

    for (let i = 0; i < strArr.length; i++) {
        if (!words[strArr[i]]) {
            words[strArr[i]] = 1;
        } else {
            words[strArr[i]]++
        }
    }
    
    return words;
}

console.log(countWords("Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"));

/*
const countWords = (string, remove) => {
    const strArr = string.toLowerCase().split('');
    const removeArr = remove.split('');
    let cleanStr = '';

    removeArr.forEach(char => {
        strArr.forEach((letter, index) => {
            if (char === letter) {
                strArr.splice(index, 1);
            }
        })
    })

    for (i = 0; i < strArr.length; i++) {
        cleanStr = cleanStr.concat(strArr[i])
    }

    const words = cleanStr.split(' ');
    const wordCount = {};

    for (i = 0; i < words.length; i++) {
        if (!wordCount[words[i]]) {
            wordCount[words[i]] = 1;
        } else {
            wordCount[words[i]]++;
        }
    }

    return wordCount;
}

console.log(countWords("Hello there, how are you? Can you tell me how to get to the nearest Starbucks?", ",?"));
*/