// Write a merge sort algorithm that sorts the dataset below.

const dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

// merge sort takes a divide and conquer approach to sorting
// it breaks the array down into continually smaller chunks, then merges them back together in the right order

const mergeSort = array => {
    // if only 1 number in array or its empty, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // slice the array in a left and right half
    const middle = Math.floor(array.length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    // sort each half recursively
    left = mergeSort(left);
    right = mergeSort(right);

    // merge the two halves together using the merge function below
    return merge(left, right, array);
}

// to merge the 2 lists, you keep choosing the lowest value from the left or right arrays...
// that hasn't already been added to the output array
// when 1 of the arrays is empty, you add all of the remaining values from the other array to it.
const merge = (left, right, array) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }
    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }

    return array;
}

console.log(mergeSort(dataset));
// time complexity: O(nlog(n))