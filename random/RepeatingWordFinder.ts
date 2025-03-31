/*
let statement= This is a cat
is:1
a: 1
*/

// console.log('is: ',(statement.split(' ').filter((c => c =='is')).length))
// console.log('a: ',(statement.split(' ').filter((c => c =='a')).length))

interface repeatedWordObj{
    Rword: string,
    Rcount: number,
}
const repeatedWordFinder = (statement:string) =>{
    let arrOfWords:string[] = statement.split(' ')
    let repeatedWords:repeatedWordObj[] = []
    arrOfWords.forEach((word)=>{
        let count = 0
        arrOfWords.forEach((word2)=>{
            if(word==word2){
                count++
            }
        })
        if (count > 1){
            if(!repeatedWords?.find(w=>w.Rword === word)){
                const repeatedWord = {
                    Rword: word,
                    Rcount: count,
                }
                repeatedWords.push(repeatedWord)
            }
        }
    })
    repeatedWords.forEach((word,index)=>{
        console.log(repeatedWords[index].Rword + ': ' + repeatedWords[index].Rcount)
    })
}

let statement:string = 'This is is a cat ata a a a cat'

repeatedWordFinder(statement)
