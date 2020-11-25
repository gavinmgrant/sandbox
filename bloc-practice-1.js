// Given a document, implement an algorithm to count the number of word occurrences.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

const wordCount = str => {
    // first split the words in the string into separate strings in an array
    let wordArray = str.split(/[ ?,.]+/);
    // create an object to hold the words and counts
    let wordCounts = {};
    // loop through the array of words
    for (i = 0; i < wordArray.length; i++) {
        // assign the word in the array to the variable "word"
        let word = wordArray[i];
        // if this word is not already a property of the wordCounts object, create it with the value of 1
        if (!wordCounts[word]) {
            wordCounts[word] = 1;
        } else {
            // if this word is already a property of wordCounts, then increase its count value by 1
            wordCounts[word]++;
        }
    }

    return wordCounts;
};

console.log(wordCount("Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"));