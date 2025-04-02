export const areAnagrams = (strOne, strTwo) => {
    // Write your code here
    if(strOne.length != strTwo.length)
    {
        return false
    }
    let sarr1 = strOne.split('')
    let sarr2 = strTwo.split('')
    let count = 0
    console.log(sarr1)
    sarr1.forEach((e1,i1) => {
        let unique = []
        sarr2.forEach((e2,i2) => {
            if(e1==e2){
                if(!unique.includes(e1)){
                    count= count + 1
                    unique.push(e1)
                }
            }
        });
    });
    console.log(count)
    if (count==strOne.length){
        return true
    }
    else{
        return false
    }
}

let str1='rail safety'
let str2='fairy tales'
console.log(areAnagrams(str1,str2));