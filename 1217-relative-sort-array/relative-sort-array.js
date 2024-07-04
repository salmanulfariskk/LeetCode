/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  // Create a map to store the index of each element in arr2
  const orderMap = new Map();
  arr2.forEach((value, index) => {
    orderMap.set(value, index);
  });

  // Use the map to sort arr1
  arr1.sort((a, b) => {
    // If both elements are in arr2, sort by their order in arr2
    if (orderMap.has(a) && orderMap.has(b)) {
      return orderMap.get(a) - orderMap.get(b);
    }
    // If only one element is in arr2, it should come first
    if (orderMap.has(a)) return -1;
    if (orderMap.has(b)) return 1;
    // If neither element is in arr2, sort in ascending order
    return a - b;
  });

  return arr1;
};