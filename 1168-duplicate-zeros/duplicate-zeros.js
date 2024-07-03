/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let n = arr.length;
    let zeros = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            zeros++;
        }
    }

    for (let i = n - 1, j = n + zeros - 1; i >= 0; i--, j--) {
        if (arr[i] !== 0) {
            if (j < n) {
                arr[j] = arr[i];
            }
        } else {
            if (j < n) {
                arr[j] = 0;
            }
            j--;
            if (j < n) {
                arr[j] = 0;
            }
        }
    }
}