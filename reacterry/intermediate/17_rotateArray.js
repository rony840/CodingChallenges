export const rotateArray = (arr, n) => {
    // Write your code here
    
    let ar1 = [...arr]
    let ar2 = [...arr]
    return([...ar1.slice(n),...ar2.splice(0,n)])
}
let arr = [1, 2, 3, 4, 5, 6]
let num = 4
console.log(rotateArray(arr,num))


/*
export const rotateArray = (arr, n) => {
    // Write your code here
    if(arr.length == 0 || n==0){
      return arr
    }

    return([...arr.slice(n%arr.length),...arr.slice(0,n%arr.length)])
}
*/