/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
     // Count the frequency of each barcode
    let freqMap = new Map();
    for (let barcode of barcodes) {
        if (!freqMap.has(barcode)) {
            freqMap.set(barcode, 0);
        }
        freqMap.set(barcode, freqMap.get(barcode) + 1);
    }

    // Create an array of [barcode, frequency] and sort it by frequency in descending order
    let sortedBarcodes = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

    // Initialize the result array with the same length as barcodes
    let result = new Array(barcodes.length);

    // Place barcodes at even indices first, then at odd indices
    let index = 0;
    for (let [barcode, count] of sortedBarcodes) {
        for (let i = 0; i < count; i++) {
            result[index] = barcode;
            index += 2;
            if (index >= barcodes.length) {
                index = 1;
            }
        }
    }

    return result;
};