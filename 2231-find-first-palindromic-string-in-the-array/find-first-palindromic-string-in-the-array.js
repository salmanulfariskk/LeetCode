/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let palindrome = ""
    let word;
    for(let i=0;i<words.length;i++){
        word = words[i].split('').reverse().join('')
        if(word===words[i]){
            palindrome=word
            break
        }
    }
    return palindrome
    
};