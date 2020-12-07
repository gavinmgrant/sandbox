// store temporary info here - delete when done

// 1. Given a document, implement an algorithm to count the number of word occurrences.
// Be sure to omit punctuations from your results so the word count is accurate.
// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

const countWords = str => {
    const strArr = str.toLowerCase().split('');
    strArr.forEach((letter, index) => {
        if (letter === ',' || letter === '?') {
            strArr.splice(index, 1);
        }
    })

    const words = {};
    const wordsArr = strArr.join('').split(' ');
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
// time complexity: O(n)



// 2. Print the fibonacci sequence of a given number

const fib = num => {
    const series = [];
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            series.push(0);
        } else if (i === 1) {
            series.push(1);
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }
    return series;
}

console.log(fib(11));
// time complexity: O(n)



// 3. Convert a phone number with letters into a phone number sequence
// example input '1800Turtles' should return 18008878537

const toPhoneNum = str => {
    const arr = str.toLowerCase().split('');    
    const numbers = '1234567890';
    const dialPad = {
        'abc': 2,
        'def': 3,
        'ghi': 4,
        'jkl': 5,
        'mno': 6,
        'pqrs': 7,
        'tuv': 8,
        'wxyz': 9
    }
    let phoneNum = [];

    arr.forEach(char => {
        if (numbers.includes(char)) {
            phoneNum.push(char);
        }
        for (const [key, value] of Object.entries(dialPad)) {
            if (key.includes(char)) {
                phoneNum.push(value);
            }
        }
    })

    return phoneNum.join('');
}

console.log(toPhoneNum('1800Turtles'));
// time complexity: O(n)



// 4. Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = arr => {
    let currSum = 0;
    let maxSum = -Infinity;
    arr.forEach(num => {
        currSum += num;
        currSum = Math.max(0, currSum);
        maxSum = Math.max(currSum, maxSum);
    })
    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// time complexity: O(n)



// 5. Check if expression has balanced parentheses, if so return true, if not return false
// input '((()))()' returns true
// input '(())(' returns false

const balancedCheck = str => {
    const opening = '({[';
    const closing = ')}]';
    const balanced = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];

    for (const bracket of str) {
        if (opening.includes(bracket)) {
            stack.push(bracket);
        } else if (closing.includes(bracket)) {
            if (stack.length === 0) {
                return false;
            }
            if (stack[stack.length-1] === balanced[bracket]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(balancedCheck('(()){}[]'));
console.log(balancedCheck('()[])'));
// time complexity: O(n)



// 6. Remove punctuations from a given string

const removePunc = (str, remove) => {
    const strArr = str.split('');
    const removeArr = remove.split('');
    removeArr.forEach(punc => {
        strArr.forEach((letter, index) => {
            if (punc === letter) {
                strArr.splice(index, 1);
            }
        })
    })
    return strArr.join('');
}

console.log(removePunc('What is this? Why are we here? Help!', '?!'));
// time complexity: O(n^2)



// 7.  Given a list of integers find the mode and the frequency of the mode. 
// The mode in a list of numbers is the value that occurs the most often. 
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
}

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))