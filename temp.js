// store temporary info here - delete when done

const countingSheep = function(sheep) {
    // base case
    if (sheep === 0) {
        return 'All sheep jumped over the fence';
    }

    // general case
    return sheep + ': Another sheep jumps over the fence\n' + (countingSheep(sheep - 1));
};

console.log(countingSheep(6));