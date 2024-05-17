/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
     const uniqueCandies = new Set(candyType);
    const maxCandiesAliceCanEat = candyType.length / 2;
    return Math.min(uniqueCandies.size, maxCandiesAliceCanEat);
};