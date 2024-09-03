/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let curr = strs[0]
    let res = ""
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < curr.length; j++) {
            if (curr[j] == strs[i][j]) {
                res += curr[j]
            } else {
                break
            }
        }
        curr = res
        res = ""
    }
    return curr
};