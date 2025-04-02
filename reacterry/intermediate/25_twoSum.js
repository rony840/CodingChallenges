export const twoSum = (nums, target) => {
    // Write your code here
    let index = []
    nums.forEach((e1,i1) => {
        nums.forEach((e2,i2) => {
            if(e1!=e2){
                let sum = e1 + e2
                if(sum == target){
                    if(!index.includes(i1) || !index.includes(i2)){
                        index.push(i1)
                        index.push(i2)
                    }
                }
            }
        });
    });
    return index
}
let arr = [2, 7, 11, 15]
let sum = 9
console.log(twoSum(arr,sum))