/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let allLowercase = word.toLowerCase()
    let allUppercase = word.toUpperCase()
    let withoutFirst = word.slice(1).toLowerCase()
    return allLowercase===word||allUppercase===word||word.slice(1)===withoutFirst
};