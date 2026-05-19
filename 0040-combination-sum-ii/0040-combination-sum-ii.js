/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = [];
    
    // Step 1: Sort the candidates to easily handle duplicates and prune
    candidates.sort((a, b) => a - b);
    
    // Step 2: Define our helper function for backtracking
    function backtrack(remainingTarget, currentCombination, startIndex) {
        // Base Case 1: We hit our exact target!
        if (remainingTarget === 0) {
            results.push([...currentCombination]); // Make a copy of the array
            return;
        }
        
        // Loop through the candidates starting from our current index
        for (let i = startIndex; i < candidates.length; i++) {
            // Pruning: If the current number is greater than what we need, 
            // since the array is sorted, all numbers after it will also be too big.
            if (candidates[i] > remainingTarget) {
                break; 
            }
            
            // Duplicate Skip: Skip identical numbers at the SAME level of decision making
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }
            
            // Take the number: Add it to our current path
            currentCombination.push(candidates[i]);
            
            // Move forward: Recursively call backtrack with the updated target and next index (i + 1)
            backtrack(remainingTarget - candidates[i], currentCombination, i + 1);
            
            // Leave the number: Backtrack by removing it so we can try the next iteration's number
            currentCombination.pop();
        }
    }
    
    // Start the process
    backtrack(target, [], 0);
    return results;
};