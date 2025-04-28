export const capitaliseAllWords = (input) => {
    // Write your code here
    let warr = input.split(' ')
    let newStr = ''
    newStr.concat
    warr.forEach((word)=>{
      let carr = word.split('')
      let newWrd = ''
      carr.forEach((e,i)=>{
        if(i===0){
            let newchar = e.toUpperCase()
            newWrd = newWrd + newchar
        }else{
            newWrd = newWrd + e
        }
        
      })
      newStr = newStr + ' ' + newWrd
    })
    return newStr.trim()
};

let str = 'hello world'
str.toUpperCase
console.log(capitaliseAllWords(str))