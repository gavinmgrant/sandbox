// Write a function that takes in a sorted array of integers as well as a target integer.
// The function should use the Binary Search algorithm to determine if the target integer is in the array and should return its index, otherwise return -1.

const binarySearch = (array, target) => {
    return binarySearchHelper(array, target, 0, array.length - 1);
}

// create a helper method that recursively traverses the array by divide and conquer
const binarySearchHelper = (array, target, left, right) => {
    // since it's a sorted array if left number greater than right, then target not in array
    if (left > right) return -1;
    // find middle index and round down
    const middle = Math.floor((left + right) / 2);
    // store a variable with the number to compare to the target input
    const potentialMatch = array[middle];

    // base case
    if (target === potentialMatch) {
        return middle;
    // general case if target input less than potential match
    } else if (target < potentialMatch) {
        return binarySearchHelper(array, target, left, middle - 1);
    // general case if target input is greater than potential match - or in this case any other condition
    } else {
        return binarySearchHelper(array, target, middle + 1, right);
    }
}

const arr = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const tgt = 33;
console.log(binarySearch(arr, tgt)); // expect the array index 3, which is the postion of the number 33

// Time complexity O(log(n))