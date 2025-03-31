export const append = (array, value) => {
    // Write your code here
    let newArr = [...array, value]
    //array.push(value)
    return newArr
}

let arr = [1,2,3,4,5]
let val = 6
console.log(append(arr, val))