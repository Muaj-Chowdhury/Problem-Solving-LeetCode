/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 'k' acts as the pointer for the position of the next non-val element
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the current element is NOT the value we want to remove
        if (nums[i] !== val) {
            // Place it at the 'k' position
            nums[k] = nums[i];
            // Move 'k' forward
            k++;
        }
    }

    // k represents the count of elements not equal to val
    return k;
};