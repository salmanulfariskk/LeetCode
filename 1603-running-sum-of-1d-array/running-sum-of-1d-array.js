/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = []
    for(let i=0;i<nums.length;i++){
        if(i===0){
            arr.push(nums[i])
        }else{

        let sum = nums[i]+arr[i-1]
        arr.push(sum)
        }
    }
    return arr
};