/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    var list = [];
    let c1 = s.charCodeAt(0), c2 = s.charCodeAt(3), r1 = s[1], r2 = s[4];
    for(let c=c1; c<=c2; c++){
      for(let r=r1; r<=r2; r++){
          list.push(String.fromCharCode(c) + r);
      }
    }
    return list;
};