/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const sortedArray = nums.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i]<k){
            count++
        }
    }
    return count
};