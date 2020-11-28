// store temporary info here - delete when done

const fibonacci = num => {
    const series = [];
    for (let i = 0; i < num + 1; i++) {
        if (i === 0) {
            series.push(0)
        } else if (i === 1) {
            series.push(1)
        } else {
            series.push(series[i - 1] + series[i - 2])
        }
    }
    return series;
}

console.log(fibonacci(11));