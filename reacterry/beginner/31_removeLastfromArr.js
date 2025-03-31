export const remove = (array) => {
    // Write your code here
    array.pop()
    return array
}

let arr = [1,2,3]
console.log(remove(arr))