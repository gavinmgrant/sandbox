// remove punctuations from a given string

// convert the string and punctuations into an array of each character and space
// declare a variable to hold the resulting string without punctuations
// remove punctuation characters in the string that match the given punctuations
// use nested forEach methods, find the matches, and splice out the punctuation from the string array
// convert the array of letters back into a string
// return the result

const removePunc = (str, remove) => {
    const strArr = str.split('');
    const removeArr = remove.split('');
    let result = '';

    removeArr.forEach(punc => {
        strArr.forEach((letter, index) => {
            if (letter === punc) {
                strArr.splice(index, 1);
            }
        })
    })

    for (let i = 0; i < strArr.length; i++) {
        result = result.concat(strArr[i]);
    }

    return result;
}

console.log(removePunc('What is this? Why are we here? Help!', '?!'));