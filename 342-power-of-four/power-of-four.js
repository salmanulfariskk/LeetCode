/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let a = Math.log(n)/Math.log(4)
    return Math.abs(a-Math.round(a))<1e-10
};