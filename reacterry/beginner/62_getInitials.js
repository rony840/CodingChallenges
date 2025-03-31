export const getInitials = (user) => {
    // Write your code here
    let iniarr = []
    for (let k in user){
        if( k == 'firstName' || k == 'middleName' || k == 'lastName' ){
            iniarr.push(user[k].substring(0,1) + '.')
        }
    }
    return iniarr.join(' ')
}
let obj = {

    firstName: 'John',
    middleName: 'A',
    lastName: 'Doe',
    age: 30
}
let str= 'reon'
console.log(getInitials(obj))