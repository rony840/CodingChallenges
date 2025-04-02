export const flatten = (arr) => {
    // Write your code here
    return arr.flat(Infinity)
};

let arr = [1, [2, [3, 4], [[5]]]]
console.log(flatten(arr))


/*

export const flatten = (arr) => {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

*/