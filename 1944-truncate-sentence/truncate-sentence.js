/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let truncate = s.split(' ')
    let piece = truncate.slice(0,k).join(' ')
    return piece
};