export const getAges = (users) => {
    // Write your code here
    return(users.map((obj,ind)=>{
        for (let k in obj){
            return obj['age']
        }
    }))
}
let arr = [{ name: 'John', age: 25, height: 175 },
    { name: 'Mary', age: 30, height: 165 },
    { name: 'Bob', age: 40, height: 180 },
    { name: 'Jane', age: 20, height: 170 }]
console.log(getAges(arr))