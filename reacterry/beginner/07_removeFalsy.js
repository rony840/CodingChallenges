export const removeFalsy = (arr) => {
  return arr.filter(Boolean);
}

let ar = [0, 1, false, 2, '', 3, undefined, null, NaN]
console.log(removeFalsy(ar))