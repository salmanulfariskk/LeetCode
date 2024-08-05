/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let leftSum = [];
    let ls = 0;
    let rightSum = []
    let rs = 0
    let diff = []

    for (let i = 0; i < nums.length; i++) {
        leftSum.push(ls);
        ls += nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        rightSum.push(rs)
        rs += nums[i];
    }
    rightSum.reverse()
    
    for(let i =0;i<nums.length;i++){
        diff.push(Math.abs(leftSum[i]-rightSum[i]))
    }
    
    return diff

};