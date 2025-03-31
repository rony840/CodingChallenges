export const isInArray = (array, value) => {
    // Write your code here
    //return array.includes(value)
    let includes = false
    array.forEach((element,index) => {
        if(element == value){
            includes = true
        }
    });
    return includes
}

let arr = [1,2,3,4,5]
let val = 5
console.log(isInArray(arr,val))