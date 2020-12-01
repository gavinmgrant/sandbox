// convert a phone number with letters into a phone number sequence
// example input '1800buycars' should return 18002892277
// example input '1800Turtles' should return 18008878537

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

console.log(toPhoneNum('1800Turtles'));
// time complexity: O(n), linear