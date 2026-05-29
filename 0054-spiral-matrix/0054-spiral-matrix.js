/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    if (matrix.length === 0) return result;

    // Initialize our 4 boundaries
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (left <= right && top <= bottom) {
        // 1. Move Right across the top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++; // Shrink the top boundary

        // 2. Move Down the right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // Shrink the right boundary

        // 3. Move Left across the bottom row
        // Check condition to ensure we haven't crossed boundaries vertically
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; // Shrink the bottom boundary
        }

        // 4. Move Up the left column
        // Check condition to ensure we haven't crossed boundaries horizontally
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // Shrink the left boundary
        }
    }

    return result;
};