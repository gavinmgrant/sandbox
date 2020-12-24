// Write a function that takes in an array of integers and returns a sorted version of that array.
// Use the Selection Sort algorithm to sort the array.

const selectionSort = array => {
    // iterate through unsorted list and each time find smallest number in unsorted list
    // then append smallest number to a new list
    let currentIndex = 0; // index of first number in unsorted sublist
    while (currentIndex < array.length - 1) {
        smallestIndex  = currentIndex;
        for (let i = currentIndex; i < array.length; i++) {
            if (array[smallestIndex] > array[i]) {
                smallestIndex = i;
            }
        }
        swap(currentIndex, smallestIndex, array);
        currentIndex++;
    }
    return array;
}

// helper function to swap numbers in array
const swap = (i, j, array) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

const input = [8, 5, 2, 9, 5, 6, 3];
console.log(selectionSort(input));

// Time complexity: O(n^2) 