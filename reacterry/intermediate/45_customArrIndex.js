Array.prototype.myFindIndex = function(callback, thisArg) {
    // Write your code here
    let index = -1
    const arr = Object(this);
    const len = arr.length >>> 0;
    let k = 0;
  
      while (k < len) {
        if (k in arr && callback.call(thisArg, arr[k], k, arr)) {
          return k;
        }
        k++;
      }
    return index
  };