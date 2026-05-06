/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    let count = 0;
    
    // First number
    for (let i = 0; i < nums.length; i++) {
        // Second number (starts AFTER i)
        for (let j = i + 1; j < nums.length; j++) {
            // Third number (starts AFTER j)
            for (let k = j + 1; k < nums.length; k++) {
                
                // The Rule: All three must be different
                if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
                    count++;
                }
                
            }
        }
    }
    return count;
};
