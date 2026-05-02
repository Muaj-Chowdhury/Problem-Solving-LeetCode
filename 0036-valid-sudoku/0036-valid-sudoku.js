/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c];
            if (val === '.') continue;

            // Calculate which 3x3 box we are in
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check if value already exists in our sets
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            // Add the value to the sets
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIndex].add(val);
        }
    }
    return true;
};