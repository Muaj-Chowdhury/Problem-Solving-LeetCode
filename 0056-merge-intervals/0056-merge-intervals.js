/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // 2. Initialize the result array with the first interval
    const merged = [intervals[0]];

    // 3. Loop through the rest of the intervals
    for (let i = 1; i < intervals.length; i++) {
        const current = merged[merged.length - 1]; // The last interval we've processed
        const next = intervals[i];                 // The interval we are looking at now

        // Check if they overlap
        if (next[0] <= current[1]) {
            // Overlap! Update the end time of the current interval
            current[1] = Math.max(current[1], next[1]);
        } else {
            // No overlap, Push the next interval as a new entry
            merged.push(next);
        }
    }

    return merged;
};