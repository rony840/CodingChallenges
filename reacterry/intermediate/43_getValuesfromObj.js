export const get = (key, object) => {
    // Write your code here
    if(typeof(object) !== 'object'){
        return undefined
    }
    if(key in object){
        return object[key]
    }

    for (const obj in object){
        const value = get(key,object[obj])
        if(value !== undefined){
            return value;
        }
    }
    return undefined
}

let k = 'c';
let obj = {
    a:{
        b:{
            c:4
        }
    },
    f: 3
}
console.log(get(k,obj))