/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    // STEP 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        // We start j at 'i' so we only swap elements above the diagonal.
        // If we started j at 0, we would swap them twice and end up right where we started!
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // STEP 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};