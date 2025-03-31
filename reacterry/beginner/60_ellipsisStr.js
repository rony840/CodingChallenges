export const truncateWithEllipsis = (str, n) => {
    // Write your code here
    if(str.length<=n){
        return str
    }
    return str.substring(0, n) + '...';
}

let str = 'hello world'
let size = 5
console.log(truncateWithEllipsis(str,size))