/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    // Sorting helps us optimize by breaking the loop early
    candidates.sort((a, b) => a - b);

    /**
     * @param {number} remaining - The value we still need to reach
     * @param {number[]} path - The current combination we are building
     * @param {number} start - The index to start looking from to avoid duplicates
     */
    const backtrack = (remaining, path, start) => {
        // Base case: success
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];

            // If the current number is greater than the remaining target,
            // no need to check this or any subsequent (larger) numbers.
            if (num > remaining) break;

            path.push(num);
            
            // Note: we pass 'i' as the next start index (not i + 1)
            // because we are allowed to reuse the same element.
            backtrack(remaining - num, path, i);
            
            // Backtrack: remove the last number to try the next candidate
            path.pop();
        }
    };

    backtrack(target, [], 0);
    return result;
};