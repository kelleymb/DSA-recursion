// if input is 0 : 'All sheep jumped over the fence'
// if input is 1-3: 'Another sheep jumps over the fence'

let input = 3;

const countSheep = function(input) {
    // Base case
    if (input === 0) {
        return input + 'All sheep jumped over the fence';
    }
    // General case
    return 'Another sheep jumps over the fence' + countSheep(input - 1);
};

console.log(countSheep(3))