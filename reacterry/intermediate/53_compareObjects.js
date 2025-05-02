export const areObjectsEqual = (obj1, obj2) => {
    // Write your code here
    if(typeof(obj1) !== typeof(obj2)){
        return false;
    }
    let count1 = 0
    for (let k in obj1){
        count1++
    }
    let count2 = 0
    for (let k in obj1){
        count2++
    }
    console.log(count1,count2)
    if(count1 === 0){
        if(count2 === 0){
            return true
        }
    }
    if(count1 === count2){
        let equal = 0
        for (let k in obj1){
            count1--
            for (let j in obj2){
                if(k===j){
                    if(obj1[k] === obj2[j]){
                        equal ++
                    }
                }
            }
            if(count1 === 0 && equal === count2){
                return true
            }
            else if(count1 === 0 && equal !== count2){
                return false
            }
        }
    }else{
        return false
    }
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };
const obj4 = {}
const obj5 = {}

console.log(areObjectsEqual(obj1, obj2));
console.log(areObjectsEqual(obj1, obj3));
console.log(areObjectsEqual(obj4, obj5))