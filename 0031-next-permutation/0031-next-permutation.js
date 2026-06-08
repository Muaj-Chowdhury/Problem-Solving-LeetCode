/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // Step 1: Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: If a pivot was found, find its swap partner
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Swap them
        swap(nums, i, j);
    }

    // Step 3: Reverse the elements to the right of the pivot
    reverse(nums, i + 1, nums.length - 1);
};

// Helper function to swap two elements in place
function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Helper function to reverse a portion of the array in place
function reverse(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}