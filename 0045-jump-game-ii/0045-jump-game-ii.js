/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 1. If the array has only 1 element, you are already at the end. 0 jumps needed.
    if (nums.length <= 1) return 0;

    let jumps = 0;       // Keeps track of the total jumps made
    let currentEnd = 0;  // The furthest index we can reach with our CURRENT number of jumps
    let furthest = 0;    // The absolute furthest index we can reach overall from any tile we've visited

    // 2. Loop through the array. We stop at nums.length - 1 because once we reach 
    // the last element (or our currentEnd can cover it), we don't need to plan another jump.
    for (let i = 0; i < nums.length - 1; i++) {
        
        // 3. Update the furthest point we could possibly reach from the current position 'i'
        furthest = Math.max(furthest, i + nums[i]);

        // 4. If we have reached the end of the boundary for our current jump...
        if (i === currentEnd) {
            jumps++;                 // We are forced to take another jump
            currentEnd = furthest;   // Our new boundary becomes the furthest point we discovered
            
            // Optimization: If our new boundary already reaches or exceeds the last index, 
            // we can stop early and return our jump count.
            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }

    return jumps;
};