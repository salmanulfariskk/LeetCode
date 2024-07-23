/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {

    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights.length - 1; j++) {
            if (heights[j] < heights[j + 1]) {
                
                let tempHeight = heights[j];
                heights[j] = heights[j + 1];
                heights[j + 1] = tempHeight;

                let tempName = names[j];
                names[j] = names[j + 1];
                names[j + 1] = tempName;
            }
        }
    }
    return names;
};