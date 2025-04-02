export const getStringsWithVowels = (array) => {
    // Write your code here
    if(array.length == 0){
        return []
    }
    let vow = []
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    array.forEach(element => {
        let carr = element.split('')
        vowels.forEach(vowe => {
            if (carr[0] == vowe){
                vow.push(element)
            }
        });
    });
    return vow
}

let arr = ['cat', 'dog', 'elephant', 'pig']
console.log(getStringsWithVowels(arr))