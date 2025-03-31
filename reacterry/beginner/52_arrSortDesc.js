export const sortDescending = (numbers) => {
    // Write your code here
    return numbers.sort((a,b)=>b-a)
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(sortDescending(numbers))