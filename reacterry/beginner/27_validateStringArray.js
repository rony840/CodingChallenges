export const validateStrings = (array) => {
    // Write your code here
    let validation = null;
    if(array.length == 0){
        validation = true
    }else{
        array.forEach((element,index) => {
            console.log(typeof(element))
            if (typeof(element) === 'number' || typeof(element) === 'object'){
                validation = false
            }
            else if( validation == null ) {
                validation = true
            }
        })
    }   
    return validation
}

let arr = ['hello', null , 'hey']

console.log(validateStrings(arr))