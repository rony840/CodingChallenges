export const reverseAString = (str) => {
    // Write your code here
    let arr = str.split('')
    console.log(arr.reverse())
    return arr.reverse().reduceRight((a,c)=>  a + c,'')
  }

  let str = 'hello'
  console.log(reverseAString(str))