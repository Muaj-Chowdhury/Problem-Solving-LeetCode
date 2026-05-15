/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 1. Sort the array numerically
    nums.sort((a, b) => a - b);
    
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];

            // If we found the exact target, return immediately
            if (currentSum === target) return currentSum;

            // Check if this sum is closer than our previous best
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Decide which pointer to move
            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
};