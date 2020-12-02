// convert a phone number with letters into a phone number sequence
// example input '1800buycars' should return 18002892277
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
// time complexity: O(n), linear

/*
const toPhoneNum = string => {
    const array = string.toLowerCase().split('')

    const keypad = {
        'a': 2,
        'b': 2,
        'c': 2,
        'd': 3,
        'e': 3,
        'f': 3,
        'g': 4,
        'h': 4,
        'i': 4,
        'j': 5,
        'k': 5,
        'l': 5,
        'm': 6,
        'n': 6,
        'o': 6,
        'p': 7,
        'q': 7,
        'r': 7,
        's': 7,
        't': 8,
        'u': 8,
        'v': 8,
        'w': 9,
        'x': 9,
        'y': 9,
        'z': 9
    }

    let result = [];

    array.forEach(char => {
        if (keypad[char]) {
            let number = keypad[char];
            result.push(number);
        } else {
            result.push(char);
        }
    });

    return result.join('');
}
*/