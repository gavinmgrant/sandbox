// Write a function that takes in a non-empty string and returns its run-length encoding.

const runLengthEncoding = string => {
    const result = [];
	let charCount = 1;

	for (let i = 1; i < string.length; i++) {
			const currChar = string[i];
			const prevChar = string[i - 1];

			if (currChar !== prevChar || charCount === 9) {
					result.push(charCount.toString());
					result.push(prevChar);
					charCount = 0;
			}

			charCount++;
	}

    // handle last character in the array of characters
	result.push(charCount.toString());
	result.push(string[string.length - 1]);

	return result.join("");
}

console.log(runLengthEncoding("AaAAAAAAAAAABBCCCCDD"));