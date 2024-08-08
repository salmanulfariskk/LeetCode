/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    let freqMap = new Map();

    for (let barcode of barcodes) {
        if (!freqMap.has(barcode)) {
            freqMap.set(barcode, 0);
        }
        freqMap.set(barcode, freqMap.get(barcode) + 1);
    }

    let sortedBarcodes = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);

    let result = new Array(barcodes.length);

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