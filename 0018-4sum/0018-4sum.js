/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const n = nums.length;
    
    // 1. Sort the array numerically
    nums.sort((a, b) => a - b);
    
    // 2. First Pointer Loop
    for (let i = 0; i < n - 3; i++) {
        // Skip duplicate values for 'i'
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // 3. Second Pointer Loop
        for (let j = i + 1; j < n - 2; j++) {
            // Skip duplicate values for 'j'
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            
            // 4. Two-Pointer Window
            let left = j + 1;
            let right = n - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Move pointers past duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < target) {
                    left++; // Need a larger sum
                } else {
                    right--; // Need a smaller sum
                }
            }
        }
    }
    
    return result;
};