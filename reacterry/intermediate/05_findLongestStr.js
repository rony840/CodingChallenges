export const findLongest = (array) => {
    // Write your code here
    let longest = ''
    array.forEach(element => {
        if(longest.length < element.length){
            longest=element
        }
    });
    return longest;
}
let arr= ['cat', 'dog', 'elephant']
console.log(findLongest(arr))