// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// 1. slow solution with nested loop
// the external loop iterates over array elements, then the internal loop counts subsums starting with the current element
// time complexity: O(n^2) polynomial

// if we take no elements, zero will be returned as maxSum
// iterate through the array and set variable of sumFixedStart to 0
// add nexted loop and let j = i
// add the iteration to sumFixedStart
// assign the maximum value between maxSum and sumFixedStart to maxSum
// return maxSum

const maxSubArraySlow = arr => {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

console.log(maxSubArraySlow([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 2. fast solution with forEach method
// time complexity: O(n), linear

// create two variables with 0 values, maxSum and partialSum
// using a forEach method iterate through the array of numbers
// add number to partialSum
// remember the maximum sum by comparing maxSum to partialSum (Math.max)
// if partialSum is less than 0 (negative number), make it equal to 0
// return maxSum

const maxSubArrayFast = arr => {
    let maxSum = 0;
    let partialSum = 0;

    arr.forEach(num => {
        partialSum += num;
        maxSum = Math.max(maxSum, partialSum)
        if (partialSum < 0) {
            partialSum = 0;
        }
    })

    return maxSum;
}

console.log(maxSubArrayFast([-2, 1, -3, 4, -1, 2, 1, -5, 4]));