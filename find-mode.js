// Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. 
// If no number in the list is repeated, then there is no mode for the list.
// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

const findMode = arr => {
    if (!arr) return null;
    const numCount = {};

    arr.forEach(num => {
        if (!numCount[num]) {
            numCount[num] = 1;
        } else {
            numCount[num]++;
        }
    })
    
    const mode = Object.keys(numCount).reduce((a, b) => numCount[a] > numCount[b] ? a : b);
    const count = Math.max(...Object.values(numCount));

    return `mode: ${mode} count: ${count}`
};

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))

/*
const findMode = arr => {
    if (!arr) return null;
    const numCount = {};

    for (i = 0; i < arr.length; i++) {
        if (!numCount[arr[i]]) {
            numCount[arr[i]] = 1;
        } else {
            numCount[arr[i]]++;
        }
    }
    const mode = Object.keys(numCount).reduce((a, b) => numCount[a] > numCount[b] ? a : b);
    const count = Math.max(...Object.values(numCount));

    return `Mode = ${mode}, Frequency of mode = ${count}`;
};
*/