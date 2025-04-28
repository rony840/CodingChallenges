export const getTimeLeft = (years, months) => {
    // Write your code here
    let yr = ''
    let mon = ''
    if(years === 1){
        yr = '1 year '
    }else{
        yr = `${years} years `
    }
    if(months === 1){
        mon = '1 month'
    }else{
        mon = `${months} months`
    }
    return yr + 'and ' + mon
}

let yr = 0
let mon = 1
console.log(getTimeLeft(yr,mon))