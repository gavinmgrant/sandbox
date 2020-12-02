// store temporary info here - delete when done

const findMode = arr => {
    if (!arr) return null;
    let numCount = {};

    arr.forEach(num => {
        if (!numCount[num]) {
            numCount[num] = 1;
        } else {
            numCount[num]++;
        }
    })

    const mode = Object.keys(numCount).reduce((a, b) => numCount[a] > numCount[b] ? a : b);
    const count = Math.max(...Object.values(numCount));

    return `mode= ${mode} count= ${count}`;
}

console.log(findMode([1, 2, 3, 6, 10, 3, 5, 6, 3, 3]))