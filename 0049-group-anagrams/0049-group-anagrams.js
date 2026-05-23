/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 1. Create an empty object to act as our buckets
    const cache = {};

    // 2. Loop through every word in the input array
    for (let str of strs) {
        // 3. Create the "signature" key by sorting the letters
        const sortedKey = str.split('').sort().join('');

        // 4. If the bucket doesn't exist yet, create an empty array for it
        if (!cache[sortedKey]) {
            cache[sortedKey] = [];
        }

        // 5. Push the *original* word into the matching bucket
        cache[sortedKey].push(str);
    }

    // 6. Return just the arrays (the groups) from our object
    return Object.values(cache);
};