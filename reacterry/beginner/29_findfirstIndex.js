export const findIndexOf = (array, value) => {
    // Write your code here
    let firstIndex = -1
    array.forEach((e,i)=>{
        if (e==value && firstIndex == -1){
            firstIndex = i
        }
      })
    return(firstIndex)
}

let arr = [1,2,3,4,2,2,3]
let val = 2
console.log(findIndexOf(arr, val))