export const sortStrings = (array) => {
    // Write your code here
    let sarr = []
    array.forEach((wrd,ind) => {
        let warr = wrd.split('')
        sarr.push(warr.sort().join(''))
    })
    return (sarr)
}

let arr = ['apple', 'banana', 'pear', 'banana', 'orange', 'apple']
console.log(sortStrings(arr))