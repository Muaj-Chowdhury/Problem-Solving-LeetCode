/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n = matrix.length;
    // Correctly initialize N sets for N rows/cols
    const rowSets = Array.from({length: n}, () => new Set());
    const colSets = Array.from({length: n}, () => new Set());

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let val = matrix[r][c];
            // Check for duplicates in row or column
            if (rowSets[r].has(val) || colSets[c].has(val)) {
                return false; // Not a valid matrix
            }
            rowSets[r].add(val);
            colSets[c].add(val);
        }
    }
    return true; // Valid matrix
};
