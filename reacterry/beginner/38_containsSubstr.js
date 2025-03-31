export const containsSubstring = (string, substring) => {
    return string.includes(substring);
}

let str = 'hello world'
let substr = 'hello'
console.log(containsSubstring(str,substr))