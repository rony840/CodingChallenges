export const areArraysEqual = (arr1, arr2) => {
    // Write your code here
    let count = 0
    if(arr1.length == arr2.length){
        if (count!=-1){
            for (let i = 0; i<arr1.length; i++){
                if(arr1[i] === arr2[i]){
                    count = count + 1
                }else{
                    return false
                }
            }
            return true
        }else{
            return false
        }
    }else{
        return false
    }
    
};

let ar1=[1,3]
let ar2=[1,2]
console.log(areArraysEqual(ar1,ar2))