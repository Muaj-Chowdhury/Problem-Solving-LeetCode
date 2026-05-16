/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // 1. Found it? Return the index immediately
        if (nums[mid] === target) {
            return mid;
        }
        
        // 2. Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
            // Is the target inside this sorted left boundary?
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Look left
            } else {
                left = mid + 1;  // Look right
            }
        } 
        // 3. Otherwise, the right side must be sorted
        else {
            // Is the target inside this sorted right boundary?
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;  // Look right
            } else {
                right = mid - 1; // Look left
            }
        }
    }
    
    // Target was never found
    return -1;
};