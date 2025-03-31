export const convertToSlug = (str) => {
    // Write your code here
    return (str.toLowerCase().split(' ').join('-'))
}

let str = 'This is an example string'

console.log(convertToSlug(str))