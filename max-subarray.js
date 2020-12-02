// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// initialize currSum to 0 and maxSum to -Infinity to track current max sum while iterating thru array and overall max sum
// iterate through array in a for loop
// check if currSum is negative, if so, assign currSum to 0
// add the value of current array index to currSum
// check if currSum is greater than maxSum, if so, assign maxSum to currSum
// return the maxSum

// time complexity: O(n) linear

const maxSubArray = nums => {
    let currSum = 0;
    let maxSum = -Infinity;

    nums.forEach(num => {
        currSum += num;
        currSum = Math.max(0, currSum);
        maxSum = Math.max(currSum, maxSum);
    })

    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -6]));

/* version for for loop

const maxSubArray = nums => {
    let currSum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        currSum = Math.max(0, currSum);
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}

*/