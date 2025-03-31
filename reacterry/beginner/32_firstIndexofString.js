export const findIndexOf = (string, substring) => {
    // Write your code here
    let strArr = string.split('')
    let substrArr = substring.split('')
    let index = -1
    if(substrArr.length > strArr.length){
        return index
    }
    strArr.forEach((e,i)=>{
        substrArr.forEach((e2,i2)=>{
            if(index == -1 && e==e2){
                index = i - i2
            }
        })
    })
    return index
}

let str = 'rl world'
let substr = 'rl'
console.log(findIndexOf(str,substr))