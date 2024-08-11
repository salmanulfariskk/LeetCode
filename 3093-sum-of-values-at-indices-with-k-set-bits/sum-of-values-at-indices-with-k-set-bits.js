/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let count = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const countOfBinary = (i.toString(2).match(/1/g) || []).length;
        if (countOfBinary === k) {
            count += nums[i]
        }
    }
    return count;
};