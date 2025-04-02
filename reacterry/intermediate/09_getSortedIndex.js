export const sortedIndex = (arr, value) => {
    // Write your code here
    function doesExists(ele){
        if(ele == value){
            return true
        }else{
            return false
        }
    }
    if(arr.findIndex(doesExists) == -1){
        arr.push(value)
        arr.sort((a,b)=>a-b)
    }
    return arr.findIndex(doesExists)
}
let arr = [1,2,3412,24,5,6]

let val = 7
console.log(sortedIndex(arr,val))