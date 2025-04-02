export const invertObject = (obj) => {
    // Write your code here
    let newobj={}
    for (let k in obj){
        let key = k
        let val = obj[k]
        newobj[val]=key
    } 
    return newobj
};

let obj = {name: 'John',
    age: 30,
    city: 'New York'}

console.log(invertObject(obj))