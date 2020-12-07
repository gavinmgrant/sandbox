// Given a non-empty string of lowercase letters and a non-negative integer representing a key, 
// write a function that returns a new string obtained by shifting every letter in the input string by .k positions in the alphabet,
// where k is the key
// Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns a.

function caesarCipherEncryptor(string, key) {
    const stringArr = string.toLowerCase().split("");
    // in case the key is a large number, use remainder operator (%) to return remainder left over when key is divided by 26. 
	key = key % 26;
	const result = [];
	for (let i = 0; i < stringArr.length; i++) {
		let letterIndex = stringArr[i].charCodeAt(0);
		let newIndex = letterIndex + key;
		if (newIndex <= 122) {
			newIndex = newIndex;
		} else {
			newIndex = 96 + newIndex % 122;
		}
		let newLetter = String.fromCharCode(newIndex);
		result.push(newLetter);
	}
	return result.join("");
}

console.log(caesarCipherEncryptor("xyz", 2));

/*
function caesarCipherEncryptor(string, key) {
    const stringArr = string.toLowerCase().split("");
    const result = [];
    if (key > 26) {
        key = key - 26;
    }
	for (let i = 0; i < stringArr.length; i++) {
		let letterIndex = stringArr[i].charCodeAt(0);
		let newIndex = letterIndex + key;
        if (newIndex > 122) {
                newIndex = newIndex - 26;
        }
        let newLetter = String.fromCharCode(newIndex);
        result.push(newLetter);
	}
	return result.join("");
}
*/