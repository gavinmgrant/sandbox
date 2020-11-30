// store temporary info here - delete when done

const maxSum = array => {
    let currSum = 0;
    let maxSum = -Infinity;

    array.forEach(num => {
        currSum = Math.max(0, currSum);
        currSum += num;
        maxSum = Math.max(currSum, maxSum)
    })

    return maxSum;
}

console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSum([-2, -6]));