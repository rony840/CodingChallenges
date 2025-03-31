export const reverseSentence = (sentence) => {
    // Write your code here
    let arr = sentence.split(' ')
    return arr.reverse().reduce((a,c)=> a + c + ' ','').trim()
}

let str = 'hello world'
console.log(reverseSentence(str))