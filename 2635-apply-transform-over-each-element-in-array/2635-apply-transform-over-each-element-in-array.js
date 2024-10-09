/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var newArray = []
    for (j = 0; j < arr.length; j++)
        {
            newArray.push(fn(arr[j], j))
        }
    return newArray
};