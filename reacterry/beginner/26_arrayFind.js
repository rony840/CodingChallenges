export const getAnAdult = (users) => {
    // Write your code here
    let adult = null;
    users.forEach((obj,index)=>{
        for (let k in obj){
            if(adult == null && obj['age'] >= 18){
                adult = obj;
            }
        }
    })
    return adult
}

let arr = [{ name: 'John', age: 15 },
    { name: 'Jane', age: 20 },
    { name: 'Bob', age: 25 },]

console.log(getAnAdult(arr))