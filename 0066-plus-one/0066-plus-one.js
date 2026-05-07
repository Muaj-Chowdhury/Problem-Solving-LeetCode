/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;

    while (i >= 0) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits; // Immediate return saves time
        }
        i--;
    }

    // Edge case: [9, 9, 9] -> Loop finishes, all are 0.
    // Instead of unshift, we can just return a new array.
    return [1, ...digits]; 
};