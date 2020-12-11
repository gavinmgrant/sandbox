// Write a function that takes in an array of integers and returns a sorted version of that array.
// Use the Bubble Sort algorithm to sort the array.

const bubbleSort = array => {
    // assume array not sorted
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false;
            }
        }
    }

    return array;
};

const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

console.log(bubbleSort([8, 5, 1, 7, 12, 2, 20, 9]));