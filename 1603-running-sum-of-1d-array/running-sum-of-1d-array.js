/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let cumulativeSum = 0;
    return nums.map(num => cumulativeSum += num)
};