// find the maximum sum in a given sequence

// establish two variables for the current max and the max of all numbers in the sequence
// we'll iterate through the array and track the current max and the max of all
// use the Math.max() function to find highest number between the current iteration or past highest iteration
// use the Math.max() function to find highest number between the current max or past highest max
// return variable of max of all

const maxSum = arr => {
    let maxNow = 0;
    let maxAll = 0;

    for (i = 0; i < arr.length; i++) {
        maxNow = Math.max(arr[i], maxNow);
        maxAll = Math.max(maxNow, maxAll);
    }

    return maxAll;
};

console.log(maxSum([4, 6, -3, 5, -2, 1]));

// complexity: 0(n) linear