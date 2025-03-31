export const sortAscending = (numbers) => {
    // Write your code here
    return numbers.sort((a,b)=>a-b)
}

let arr = [1,54,352,32]
console.log(sortAscending(arr))