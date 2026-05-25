/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Initialize both tracking variables with the first element
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    // Start looping from the second element (index 1)
    for (let i = 1; i < nums.length; i++) {
        // Decision: Do we extend the current subarray, or start a new one at nums[i]?
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update our global maximum if the current subarray sum is the best we've seen
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};