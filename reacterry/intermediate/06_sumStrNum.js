export const sumNumbers = (str) => {
    // Write your code here
    if(str.length == 0){
        return 0
    }
    let snarr = str.split(',')
    let narr = []
    snarr.forEach(element => {
        narr.push(parseInt(element))
    });
    return narr.reduce((a,c)=>a+c,0)
}

let str = '10,-20,30,-40,50'
console.log(sumNumbers(str))