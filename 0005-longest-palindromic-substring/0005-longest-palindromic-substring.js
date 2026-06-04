/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    let longest = "";

    // Helper function to expand outward from a center
    function expandAroundCenter(left, right) {
        // While pointers are in bounds and characters match, expand
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the valid palindromic substring found
        // Note: left + 1 because the loop stopped *after* moving past the valid boundaries
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        // Case 1: Odd length palindrome (e.g., "aba", center is 'b')
        let oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Case 2: Even length palindrome (e.g., "cbbd", center is between 'b' and 'b')
        let evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
};