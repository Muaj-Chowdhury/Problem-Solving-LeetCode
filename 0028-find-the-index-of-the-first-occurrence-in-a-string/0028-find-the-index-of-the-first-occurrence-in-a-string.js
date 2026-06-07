/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Edge case: If needle is longer than haystack, it can't be a substring
    if (needle.length > haystack.length) return -1;
    
    const hLen = haystack.length;
    const nLen = needle.length;
    
    // We only need to loop up to the point where the remaining 
    // characters in haystack are at least as long as the needle
    for (let i = 0; i <= hLen - nLen; i++) {
        // Extract a substring of needle's length and compare
        if (haystack.substring(i, i + nLen) === needle) {
            return i; // Found the first occurrence
        }
    }
    
    return -1; // Needle not found
};