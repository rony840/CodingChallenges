export const addFromBeginning = (array, value) => {
    // Write your code here
    array.unshift(value)
    return array
  }

  let ar = [1,2,3]
  let newElem = 0
  console.log(addFromBeginning(ar,newElem))