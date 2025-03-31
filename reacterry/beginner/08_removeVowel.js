export const removeVowels = (str) => {
    // Write your code here
    let sarr = str.split('')
    let vowel = ['a','e','i','o','u','A','E','I','O','U']
    let filterStr = sarr.filter((c, i2)=> !vowel.includes(c))
    return filterStr.reduce((c,a)=> c + a,'')
  }

let str = 'A quick brown fox jumps over the lazy dog'

console.log(removeVowels(str))