/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0
    let maxDepth = 0
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            count++
            if(count>maxDepth){
                maxDepth = count
            }
        }else if (s[i]===")"){
            count--
        }
    }
    return maxDepth
    
};