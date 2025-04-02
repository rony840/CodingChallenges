export const isPalindrome = (number) => {
    // Write your code here
    let narr = number.toString().split('')
    if (parseInt(narr.reverse().join('')) == number){
        return true
    }else{
        return false
    }
}

let num = 123321

console.log(isPalindrome(num))