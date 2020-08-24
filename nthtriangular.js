// calcuate nth number
// nth triangle - number of dots composing a triangle

// find the base case first

const triangularNumber = function(input) {
    // Base case
    if (input === 1) {
        return 1;
    }
    // General case
    return input + triangularNumber(input - 1)
};

console.log(triangularNumber(4));