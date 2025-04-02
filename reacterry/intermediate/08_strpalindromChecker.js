export const isPalindrome = (str) => {
    // Edit this line
    let sarr = str.toLowerCase().split('')
    if(sarr.reverse().join('') == str.toLowerCase()){
        return true
    }
    else {
        return false
    }
}
let str = 'rAceCar'
str.rev
console.log(isPalindrome(str))