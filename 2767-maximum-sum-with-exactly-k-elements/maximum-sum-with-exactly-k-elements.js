/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    nums.sort((a, b) => a - b);
    let score = 0;
    
    for (let i = 0; i < k; i++) {
        const selected = nums.pop();
        score += selected; 
        nums.push(selected + 1);
        nums.sort((a, b) => a - b);
    }
    
    return score;
};