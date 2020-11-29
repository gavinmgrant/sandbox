// check if expression has balanced parentheses, if so return true, if not return false
// input '((()))()' returns true
// input '(())(' returns false

// first, create string constants for opening and closing brackets types
// create an object matching closing brackets to their corresponding opening bracket
// create an empty array to act as our stack
// iterate through each character in the string input, using a for...of statement
// if character matches one of the opening brackets, add opening bracket to the stack
// else if character matches on the the closing brackets...
// ...if the stack is empty, return false
// ...if the last opening bracket in the stack matches the closing bracket, pop it from the stack, since they're a match
// ...else return false, because they are not a match
// if the stack is empty in the end return true, if there are any characters in the stack that means the brackets are imbalanced

// time complexity: O(n) linear

const balancedCheck = str => {
    const opening = '([{';
    const closing = ')]}';
    const matching = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack = [];

    for (const char of str) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            if (stack.length == 0) {
                return false;
            }
            if (stack[stack.length - 1] === matching[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
   
    return stack.length === 0;
}

console.log(balancedCheck('(()){}[]'));
console.log(balancedCheck('()[])'));

/*
const balancedCheck = str => {
    const stack = [];
    const open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    const closed = {
        '}': true,
        ']': true,
        ')': true
    };

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) {
                return false;
            }
        }
    }
   
    return stack.length === 0;
}
*/