// check if a string input is a palindrome, return true if so, return false if not

function isPalindrome(string) {
    const strArr = string.split('');
    let reverse = '';
    for (let i = strArr.length - 1; i >= 0; i--) {
        reverse = reverse.concat(strArr[i]);
    }
    if (string === reverse) {
        return true
    } else {
        return false;
    }
}

console.log(isPalindrome('abcdcba')); // true
console.log(isPalindrome('abdfca')); // false