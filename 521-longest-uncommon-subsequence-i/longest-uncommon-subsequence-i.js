/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    const lengthA = a.length
    const lengthB = b.length

    if(a===b){
        return -1
    }

    if(lengthA>lengthB){
        return lengthA
    }else{
        return lengthB
    }

};