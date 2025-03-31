export const getRandomColor = () => {
    // Write your code here
    let arr = ['F','F','F','F','F','F']
    let hex = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9']
    return ('#'+arr.map((e,i)=>{
        let randomInt = Math.floor(Math.random() * (15 - 0) + 0)
        return hex[randomInt]
    }).join(''))
}

console.log(getRandomColor());