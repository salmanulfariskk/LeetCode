/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let expected = [...heights].sort((a, b) => a - b)
    let match = 0
    for (let i = 0; i < heights.length; i++) {
        for (let j = i; j < expected.length; j++) {
            if (heights[i] !== expected[j]) {
                match++
                break
            } else {
                break
            }
        }
    }
    return match
};