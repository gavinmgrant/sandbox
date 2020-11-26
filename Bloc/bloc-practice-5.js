// Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. 
// If no number in the list is repeated, then there is no mode for the list.
// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

const findMode = arr => {
    // if the array is empty, return null
    if (!arr) return null;
    // create an object to count the number of times an integer appears in the array
    const numCount = {};
    // iterate through the array to find the mode
    for (i = 0; i < arr.length; i++) {
        // if the integer is not already a property of the numCount object, create it with the value of 1
        if (!numCount[arr[i]]) {
            numCount[arr[i]] = 1;
        } else {
            // if the integer is already a property of numCount, increase by 1
            numCount[arr[i]]++;
        }
    }
    // find the key with the highest value and that is the mode, convert numCount object keys to an array then reduce to 
    const mode = Object.keys(numCount).reduce((a, b) => numCount[a] > numCount[b] ? a : b);
    // use a spread operator to allow the Math.max function to find the highest value in the array of numCount values
    const count = Math.max(...Object.values(numCount));

    return `Mode = ${mode}, Frequency of mode = ${count}`;
};

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))