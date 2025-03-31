export const removeFromBeginning = (array) => {
    // Write your code here
    return array.filter((e,i)=> !i==0)
}

let arr = [1,2,3,4,5]
console.log(removeFromBeginning(arr))