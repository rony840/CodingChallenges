export const removeDuplicates = (str) => {
    // Write your code here
    let carr = str.split('')
    let unique = []
    carr.forEach((e1,i1) => {
        carr.forEach((e2) => {
            if(e1==e2){
                if(unique.includes(e1) == false){
                    unique.push(e1)
                }
            }
        });
    });
    return unique.join('')
}

let str = 'AAbb'
console.log(removeDuplicates(str))