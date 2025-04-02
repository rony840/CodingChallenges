export const range = (start, end, step = 1) => {
    // Write your code here
    let arr = []
    let elem = start
    for (let i=0; i<end-1; (step>0? i = i+step : i=i+1)){
        if(step>0){
            arr.push(elem)
            elem = elem + step
        }else if(step == null){
            arr.push(elem)
            elem = elem + 1
        }else{
            return []
        }
    }
    return arr
}
let strt = 1
let end = 5
let step = 2
console.log(range(strt,end,step))