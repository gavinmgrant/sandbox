// recursive solution to print the fibonacci sequence of a given number

// if the number is less than or equal to 1 then return the first two numbers in the fibonacci sequence
// else, assign a recursive function taking the number minus 1 to a variable
// take that variable then add the next fibonacci number in the series to the array, which is addition of the last two numbers in the array
// return the array

const fibonacciR = num => {
    if (num <= 1) {
        return [0, 1];
    } else {
        let series = fibonacciR(num - 1);
        series.push(series[num - 1] + series[num - 2]);
        return series;
    }
}

console.log(fibonacciR(11));
// time complexity: O(2^n), exponential


// iterative solution to print the fibonacci sequence of a given number

// create an empty array to hold the sequence
// loop up until the number plus 1 to account for starting at 0
// if i = 0, add 0 to array
// if i = 1, add 1 to array
// else add the sum of the last two numbers in the sequence
// return the array

const fibonacciI = num => {
    const series = [];
    for (let i = 0; i < num + 1; i++) {
        if (i === 0) {
            series.push(0)
        } else if (i === 1) {
            series.push(1)
        } else {
            series.push(series[i - 1] + series[i - 2]);
        }
    }
    return series;
}

console.log(fibonacciI(11));
// time complexity: O(n), linear