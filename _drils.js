// 1. Given a document, implement an algorithm to count the number of word occurrences.
// Be sure to omit punctuations from your results so the word count is accurate.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

const countWords = str => {
    // 1. convert string in an array of all lowercase letter
    const strArr = str.toLowerCase().split('');
    // 2. iterate through the array and splice out any puncuation 
    strArr.forEach((char, i) => {
        if (char === '?' || char === ',') {
            strArr.splice(i, 1);
        }
    })
    // 3. make an array of the words
    const wordsArr = strArr.join('').split(' ');
    // 4. create an object to hold the words and the count of each
    const words = {};
    // 5. iterate through the array of words and add words to keys, then counts to values
    wordsArr.forEach(word => {
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    })
    return words;
}

console.log(countWords("Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"));
// time complexity: O(n) linear



// 2. Print the fibonacci sequence of a given number

const fib = num => {
    // 1. create an empty array to hold the fibonacci sequence
    const series = [];
    // 2. create a for loop to count up to the num amount
    for (let i = 0; i <= num; i++) {
        // 3. since the fibonacci sequence starts with 0, 1 add these to the array
        if (i === 0) {
            series.push(0);
        } else if (i === 1) {
            series.push(1);
        } else {
            // 4. push the last two values in the array as the sequence continues
            series.push(series[i - 1] + series[i - 2]);
        }
    }
    return series;
}

console.log(fib(11));
// time complexity: O(n) linear



// 3. Convert a phone number with letters into a phone number sequence
// example input '1800Turtles' should return 18008878537

const toPhoneNum = str => {
    // 1. create an array of the letter phone number and make lowercase
    const strArr = str.toLowerCase().split('');
    // 2. create a string of numbers to know the difference between numbers and letters in the phone number
    const numbers = '1234567890';
    // 3. create a keypad object to hold the letters and associated number as key and value pairs
    const keyPad = {
        'abc': 2,
        'def': 3,
        'ghi': 4,
        'jkl': 5,
        'mno': 6,
        'pqrs': 7,
        'tuv': 8,
        'wxyz': 9
    }
    // 4. create an array to hold the number only phone number
    const phoneNum = [];
    // 5. iterate through array of characters and first check if its a number, if so, add it to the new array
    strArr.forEach(char => {
        if (numbers.includes(char)) {
            phoneNum.push(char);
        }
        // 6. iterate through the keypad object using a for...of loop to capture the key/value pairs
        for (const [key, value] of Object.entries(keyPad)) {
            // 7. if the key includes the letter character, push the number value to the new array
            if (key.includes(char)) {
                phoneNum.push(value)
            }
        }
    })
    return phoneNum.join('');
}

console.log(toPhoneNum('1800Turtles'));
// time complexity: O(n^2) polynomial due to nested loops



// 4. Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = arr => {
    // 1. we'll use a linear solution. initialize two variables to hold the current sum and maximum sum as we iterate through the given array 
    let currSum = 0;
    let maxSum = -Infinity;
    // 2. iterate through the array
    arr.forEach(num => {
        // 3. add the value of the current number to the current sum
        currSum += num;
        // 4. check if the current sum is less than 0, if so, assign it to 0
        currSum = Math.max(0, currSum);
        // 5. check if the current sum is greater than the max sum, if so assign it to maxSum
        maxSum = Math.max(currSum, maxSum);
    });
    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// time complexity: O(n) linear



// 5. Check if expression has balanced parentheses, if so return true, if not return false
// input '((()))()' returns true
// input '(())(' returns false

const balancedCheck = str => {
    // 1. define strings that include what is an opening and closing bracket
    const opening = '({[';
    const closing = ')}]';
    // 2. create an object with key/value pairs of closed and opened brackets, so we can track if a closed bracket has a match
    const balanced = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    // 3. create an array to use as a stack to hold the opening brackets to check against closing brackets
    const stack = [];
    // 4. iterate through the string using a for...of loop
    for (const bracket of str) {
        // 5. if it's an opening bracket, add to the stack
        if (opening.includes(bracket)) {
            stack.push(bracket);
        // 6. if it's a closed bracket, first check if the stack is empty, if so, no matching opening bracket, return false    
        } else if (closing.includes(bracket)) {
            if (stack.length === 0) {
                return false;
            } 
            // 7. peek in the stack to see if the last opening bracket matches the closing bracket, if so, pop off the stack since they match
            if (stack[stack.length-1] === balanced[bracket]) {
                stack.pop()
            }
        }
    }
    // 8. lastly, check if the stack is empty, if so every bracket matches, if not, it's an imbalanced string of brackets
    return stack.length === 0;
}

console.log(balancedCheck('(()){}[]'));
console.log(balancedCheck('()[])'));
// time complexity: O(n) linear



// 6. Remove punctuations from a given string

const removePunc = (str, remove) => {
    // 1. create arrays of each input using the split method
    const strArr = str.split('');
    const removeArr = remove.split('');
    // 2. iterate through the arrays using a nested loop, be sure to track the sentence array's character and index
    strArr.forEach((char, index) => {
        removeArr.forEach(punc => {
            // 3. if the character matches the punctuation, splice it out of the sentence array using the index
            if (char === punc) {
                strArr.splice(index, 1)
            }
        })
    })
    return strArr.join('');
}

console.log(removePunc('What is this? Why are we here? Help!', '?!'));
// time complexity: O(n^2) polynomial due to nested loops



// 7.  Given a list of integers find the mode and the frequency of the mode. 
// The mode in a list of numbers is the value that occurs the most often. 
// If no number in the list is repeated, then there is no mode for the list.
// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

const findMode = arr => {
    // 1. first check if the array is empty, if so, return null
    if (!arr) return null;
    // 2. create an object to hold the numbers and counts as key/value pairs
    const numCount = {};
    arr.forEach(num => {
        if (!numCount[num]) {
            numCount[num] = 1;
        } else {
            numCount[num]++;
        }
    })
    // 3. define the mode using Object.keys of the numCount object, then reduce it to the once with the most counts
    const mode = Object.keys(numCount).reduce((a, b) => numCount[a] > numCount[b] ? a : b);
    // 4. define the mode count by checking for the maximum of the Object.values of the numCount object
    const count = Math.max(...Object.values(numCount));

    return `mode: ${mode} frequency: ${count}`
}

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))
// time complexity: O(n) linear