// check if expression has balanced parentheses, if so return true, if not return false
// input '((()))()' returns true
// input '(())(' returns false

// assign an array (or stack) to a variable
// assign an object with the open and close parentheses as key/value pairs
// assign an object with the closed parentheses as keys and true as all the values
// iterate through the string...
// if the iteration is an opening bracket, add to stack the closing bracket
// else if the iteration is a closing bracket, check if the matching closed parentheses of the last element that is popped off the stack is not equal to the current character
// return false if they are not equal, becuase we have an imbalanced input

// time complexity: O(n) linear

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
        console.log(char, open[char]);
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

console.log(balancedCheck('(()){}[]'));
console.log(balancedCheck('()[]'));