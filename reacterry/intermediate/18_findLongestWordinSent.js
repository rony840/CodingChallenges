export const findLongestWord = (sentence) => {
    // Write your code here
    if(sentence.length == 0){
        return null
    }
    let warr = sentence.split(' ')
    let longest = ''
    warr.forEach((e1,i1) => {
        if(longest.length<e1.length){
            longest=e1
        }
    });
    return longest
}

let str = 'The quick brown fox jumped over the lazy dog'
console.log(findLongestWord(str))