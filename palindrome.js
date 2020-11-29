// check if a string input is a palindrome, return true if so, return false if not

function isPalindrome(string) {
    string = string.toLowerCase();
    return string === string.split('').reverse().join('');
}

console.log(isPalindrome('abcdcba')); // true
console.log(isPalindrome('abdfca')); // false

/*
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
*/