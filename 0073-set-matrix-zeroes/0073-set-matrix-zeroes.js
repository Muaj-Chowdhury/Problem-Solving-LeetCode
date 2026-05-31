/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let firstColHasZero = false;

    // 1. Determine if the first column has any zeroes originally
    for (let r = 0; r < rows; r++) {
        if (matrix[r][0] === 0) {
            firstColHasZero = true;
        }
    }

    // 2. Use the first row and first column as markers
    // Note: We start c at 1 because Column 0 is handled by firstColHasZero
    for (let r = 0; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0; // Flag the row
                matrix[0][c] = 0; // Flag the col
            }
        }
    }

    // 3. Iterate through the matrix updating cells based on the markers
    // We do this backwards or excluding row 0 / col 0 so we don't overwrite markers prematurely
    for (let r = rows - 1; r >= 0; r--) {
        for (let c = cols - 1; c >= 1; c--) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

    // 4. Finally, update the first column if it originally contained a zero
    if (firstColHasZero) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }
};