export const mapToUppercase = (names) => {
    // Write your code here
    let namesUpper = names.map((e,i)=> e.toUpperCase())
    return namesUpper
}

const names1 = ['john', 'mary', 'bob', 'jane'];
console.log(mapToUppercase(names1));