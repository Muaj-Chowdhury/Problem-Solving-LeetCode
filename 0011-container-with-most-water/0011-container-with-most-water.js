/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;               // Start at the beginning
    let right = height.length - 1; // Start at the end

    while (left < right) {
        // 1. Calculate the width
        let width = right - left;
        
        // 2. Find the height (the shorter of the two walls)
        let currentHeight = Math.min(height[left], height[right]);
        
        // 3. Calculate current area and update max if it's larger
        let currentArea = width * currentHeight;
        max = Math.max(max, currentArea);

        // 4. Move the pointer pointing to the shorter wall
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};