// Print the Fibonacci sequence of a given number
// A series of numbers in which each number is the sum
// of the 2 preceding numbers
// The sequence is as follows: 1, 1, 2, 3, 5, 8, 13

const fib = function(input) {
    // Base case
    if(input <= 0) {
        return 'Input must be greater than 0.';
    }
    if(input === 1) {
        return 1;
    }
    if(input === 2) {
        return 1;
    }
    return fib(input - 1) + fib(input - 2);
};

console.log(fib(4));