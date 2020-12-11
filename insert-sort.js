// Write a function that takes in an array of integers and returns a sorted version of that array.
// Use the Insert Sort algorithm to sort the array.

const insertSort = array => {
    for (let i = 1; i <= array.length; i++) {
        let j = i;
        // while we are not at the start of the temporarily sorted subarray and the current number is less than the next
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j - 1, array);
            j--;
        }
    }
    return array;
}

// helper function to swap numbers in array
const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

console.log(insertSort([8, 5, 1, 7, 12, 2, 20, 9]))