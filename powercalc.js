// Takes two parameters: integer as a base & integer as an exponent
// Returns the value of the base, raised to the power of the exponent
// Use only exponents greater than or equal to 0 (positive numbers)

const powerCalc = function(base, exponent) {
    if (exponent < 0) {
        return 'Exponent should be >=0';
    }
    // Base Case
    if (exponent === 1) {
        return base;
    }
    return base * powerCalc(base, exponent - 1);
};

console.log(powerCalc(10, 2));