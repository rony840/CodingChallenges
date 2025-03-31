export const getKeys = (object) => {
    // Write your code here
    let keys = []
    for (let k in object){
        keys.push(k)
    }
    return keys
}

let obj = { foo: 1, bar: 2, baz: 3 }
console.log(getKeys(obj))