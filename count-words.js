// Given a document, implement an algorithm to count the number of word occurrences.
// Be sure to omit punctuations from your results so 
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

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