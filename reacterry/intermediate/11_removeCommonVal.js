export const removeValues = (arr1, arr2) => {
    // Write your code here
    if(arr2.length == 0){
        return arr1
    }
    let newArr = []
    arr1.forEach((e1,i1) => {
        if(!arr2.includes(e1)){
            newArr.push(e1)
        }
    });
    arr1 = newArr.map((e)=>e)
    return arr1
}

let a1 = [1, 2, 3]
let a2 = [1, 2, 3]
a1.
console.log(removeValues(a1,a2))


/*

export const removeValues = (arr1, arr2) => {
  // Write your code here
  for (let i = 0; i < arr2.length; i++) {
    let index = arr1.indexOf(arr2[i]);
    while (index !== -1) {
      arr1.splice(index, 1);
      index = arr1.indexOf(arr2[i]);
    }
  }
  return arr1;
};

*/