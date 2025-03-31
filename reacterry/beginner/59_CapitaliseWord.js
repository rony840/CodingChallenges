export const capitaliseWord = (word) => {
    // Write your code here
    let warr = word.split('')
    return(warr.map((c,i)=>{
        if(i==0){
            return c.toUpperCase()
        }else{
            return c
        }
    }).join(''))
};

let wrd = 'hello'
console.log(capitaliseWord(wrd))