/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    // Start by assuming the first word is the common prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // While the current string doesn't start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by one character from the end
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If it becomes empty, there's no common prefix at all
            if (prefix === "") return "";
        }
    }

    return prefix;
};