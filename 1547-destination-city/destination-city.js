/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const outgoingCities = new Set()
    for(const [stārtCity,_] of paths){
        outgoingCities.add(stārtCity)
    }
    for(const [_,destCity] of paths){
        if(!outgoingCities.has(destCity)){
            return destCity
        }
    }
};