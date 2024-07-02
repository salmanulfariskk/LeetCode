/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
   let a = s.split('')
   let change = 0
   for(let i = 0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i].toLowerCase()!==a[j].toLowerCase()){
            change++
            break
        }
        break
    }
   }
   return change
   
};