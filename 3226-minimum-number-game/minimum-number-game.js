/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let arr = [];
    nums.sort((a, b) => a - b);

    while (nums.length > 0) {
        let aliceRemoved = nums.shift();
        let bobRemoved = nums.shift();

        arr.push(bobRemoved);
        arr.push(aliceRemoved);
    }

    return arr;
};