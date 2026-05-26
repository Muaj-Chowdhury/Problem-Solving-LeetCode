/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const used = new Set();

    function backtrack(currentPath) {
        // Base Case: If the current path is complete, save a copy of it
        if (currentPath.length === nums.length) {
            result.push([...currentPath]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            // Skip elements that are already in the current permutation path
            if (used.has(nums[i])) continue;

            // 1. Make a choice
            currentPath.push(nums[i]);
            used.add(nums[i]);

            // 2. Explore deeper down this path
            backtrack(currentPath);

            // 3. Undo the choice (Backtrack)
            currentPath.pop();
            used.delete(nums[i]);
        }
    }

    backtrack([]);
    return result;
};