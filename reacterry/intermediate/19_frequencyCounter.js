export const frequencyCounter = (arr) => {
    // Write your code here
    const obj = {}
    arr.forEach((e1,i1) => {
        let count = 0
        arr.forEach((e2,i2) => {
            if(e1==e2)
            {count= count + 1}
        });
        obj[e1]=count
    });
    return obj;
};

let arr = [1, 2, 3, 1, 2, 1, 4, 5, 6, 5]
console.log(frequencyCounter(arr))