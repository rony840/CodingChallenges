export const reverseArray = (array) => {
    let array2:any = []
    array.reduceRight((acc:number, curr:any) => {
        array2.push(curr) 
        acc =+ 1
    }, 0)
    return array2;
}

let array = [1,2,3,4,5]
console.log(reverseArray(array))