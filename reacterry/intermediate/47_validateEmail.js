export const validateEmailAddress = (email) => {
    // Write your code here
    if (email.length === 0){
        return false
    }
    const regex = /^[^@]+@[^@.]+(\.[^@.]+)+[^@]*$/
    return(regex.test(email))
}
let email = 'ron@ron.com'

console.log(validateEmailAddress(email))