/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) return false;

    let sum = 1; 
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i * i !== num) { 
                sum += num / i;
            }
        }
    }
    return sum === num;
    
    
};