
export const countVowels = (str) => {
    // Write your code here
    let sarr = str.split('')
    let vowel = ['a','e','i','o','u','A','E','I','O','U']
    let filterStr = sarr.filter((c, i)=> vowel.includes(c))
    return(filterStr.length)
  }
let str = 'A quick brown fox jumps over the lazy dog'
console.log(countVowels(str))