export const randomInRange = (min, max) => {
    // Write your code here
    return Math.floor(Math.random() * (max - min) + min)
}

let min = 5
let max = 10

console.log(randomInRange(min,max))