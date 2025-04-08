//values = [2,5,1]
//output:
/*
|   X   |
|   X   |
|   X   |
| X X   |
| X X X |
*/

export const findYmax = (arr) => {
    if (arr.length == 0){
      return null
    }
    else{
        let largest = arr[0];
      arr.forEach((e,i)=>{
        if (e>largest){
          largest=e
        }
      })
      return largest;
    }
}

const graphPrinter = (arr) => {
    let Xmax = arr.length
    let Ymax = findYmax(arr)
    for (let i = Ymax; i>0; i--){
        let plot = '| '
        for (let j = 0; j<Xmax; j++){
            if(arr[j] >= i){
                plot = plot.concat('X ')
            }else{
                plot = plot.concat('  ')
            }
        }
        plot = plot.concat('|')
        console.log(plot)
    }
}

let arr = [3,2,1,0]
graphPrinter(arr)