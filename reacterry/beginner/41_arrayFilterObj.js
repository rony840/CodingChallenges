export const getAdultUsers = (users) => {
    // Write your code here
    return(users.filter((e,i) => {
        for(let k in e){
            if(k=='age' && e[k]>=18){
                return e
            }
        }
    }))
}

let arr = [{ name: 'John', age: 21, height: 180 },
    { name: 'Mary', age: 17, height: 165 },
    { name: 'Bob', age: 25, height: 175 },
    { name: 'Jane', age: 15, height: 170 }]
console.log(getAdultUsers(arr))