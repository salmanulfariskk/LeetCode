/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    // Create a map to count the frequency of each normalized domino
    let countMap = new Map();

    // Normalize each domino and count their occurrences
    for (let [a, b] of dominoes) {
        // Sort the domino to normalize it
        let key = a < b ? `${a},${b}` : `${b},${a}`;
        countMap.set(key, (countMap.get(key) || 0) + 1);
    }

    // Calculate the number of equivalent pairs
    let numPairs = 0;
    for (let value of countMap.values()) {
        if (value > 1) {
            numPairs += (value * (value - 1)) / 2;
        }
    }

    return numPairs;
};