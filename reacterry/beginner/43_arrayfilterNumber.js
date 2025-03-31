export const getLessThanFive = (numbers) => {
    // Edit this line
    return numbers.filter((e)=>e<5)
}

let arr = [0,1,2,3,4,5,6,7,8]
console.log(getLessThanFive(arr))