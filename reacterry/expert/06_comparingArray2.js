export const haveSameElements = (array1, array2) => {
    // Write your code here
    let equal = false
    if(array1.length === array2.length){
        let count = 0;
        for (let i=0; i<array1.length; i++){
            for(let j=0; j<array2.length; j++){
                if(array1[i]===array2[j]){
                    count++;
                    break;
                }
            }
        }
        if(count === array1.length){
            equal = true
        }
    }
    else{
        equal = false
    }
    return equal
};

let ar1 = [1,2]
let ar2 = [4,3,2,1]
let ar3 = [1,2,3,4]

console.log(haveSameElements(ar1,ar2))
console.log(haveSameElements(ar2,ar3))