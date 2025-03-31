export const validateObject = (users) => {
    // Write your code here
    let validation = null;
    if(users.length == 0){
        validation = true
    }
    users.forEach((obj,index) => {
        for (let k in obj){
            console.log(obj)
            if(obj['firstName'] == null){
                validation = false
            }
            else if(validation == null) {
                validation = true
            }
        }
    });
    return validation;
}

let arr = [{ firstName: 'John', lastName: 'Doe' },
    { lastName: 'Doe' },
    { firstName: 'John', lastName: 'Doe' }]
console.log(validateObject(arr))
