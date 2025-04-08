/*
Change your code 
[[2,5],[1,2],[3,1]]

it should have same output, here 2 is the column and 5 is number of X
for 2nd element 1 is the colum and 2 is the number of X
for 3rd 3 is column and 1 is the number of X

output:

|   X   |
|   X   |
|   X   |
| X X   |
| X X X |
*/

export const findXmax = (arr) => {
    if (arr.length == 0){
      return null
    }
    else{
      let values = []
      for(let i = 0; i<arr.length; i++){
        values.push(arr[i][0])
      }
      let largest = values[0];
      values.forEach((e,i)=>{
        if (e>largest){
          largest=e
        }
      })
      console.log('x',largest)
      return largest;
    }
  }

export const findYmax = (arr) => {
  if (arr.length == 0){
    return null
  }
  else{
    let values = []
    for(let i = 0; i<arr.length; i++){
      values.push(arr[i][1])
    }
    let largest = values[0];
    values.forEach((e,i)=>{
      if (e>largest){
        largest=e
      }
    })
    return largest;
  }
}

const sort2D = (arr) =>{
 let index = []
 for(let i = 0; i<arr.length; i++){
  index.push(arr[i][0])
 }
 let sortedInd = index.sort((a,b)=>a-b)
 let sarr = []
 for (let i = 0; i<sortedInd.length; i++){
  arr.forEach((e2,i2) => {
    if(arr[i2][0] == sortedInd[i]){
      sarr.push(arr[i2])
    }
  });
 }
return sarr
}

const graphPrinter2 = (arr) => {
  let Xmax = findXmax(arr)
  let Ymax = findYmax(arr)
  let sarr = sort2D(arr)
  for (let i = Ymax; i>0; i--){
    let plot = '| '
    let k = 0
    for(let j = 0; j<=Xmax; j++){
        if(j==sarr[k][0]){
            if(sarr[k][1] >=i ){
                plot = plot.concat('X ')
            }
            else{
                plot = plot.concat('  ')
            }
            if(k<sarr.length){
                k++
            }
        }
        else{
            plot = plot.concat('  ')
        }
    }
    plot = plot.concat('|')
    console.log(plot)
  }
}

let arr2 = [[0,6],[1,3],[2,4],[3,3]]
graphPrinter2(arr2)