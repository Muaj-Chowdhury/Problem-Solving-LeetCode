/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // If only one row (or very short string), output is unchanged.
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // 2D-like row buckets.
    const rows = Array.from({ length: numRows }, () => []);

    let idx = 0; // current row
    let d = 1;   // direction: +1 down, -1 up

    for (const ch of s) {
        rows[idx].push(ch);

        // Flip direction at boundaries.
        if (idx === 0) d = 1;
        else if (idx === numRows - 1) d = -1;

        idx += d;
    }

    // Read row by row to build final answer.
    return rows.map(r => r.join('')).join('');
};
console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"