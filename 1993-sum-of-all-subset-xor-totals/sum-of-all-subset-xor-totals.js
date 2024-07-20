/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let n = nums.length;
    let sum = 0;
    for (let i = 0; i < (1 << n); i++) {
        let xorSum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                xorSum ^= nums[j];
            }
        }
        sum += xorSum;
    }
    return sum;
};