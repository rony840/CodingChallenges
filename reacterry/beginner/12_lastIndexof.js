export const findLastIndexOf = (array, value) => {
    // Write your code here
    let lastIndex = -1
    array.forEach((e,i)=>{
        if (e==value){
          lastIndex = i
        }
      })
    return(lastIndex)
  }

  let arr = [1, 2, 3, 2, 4, 2, 2, 2, 5, 6]
  let val = 2

  console.log(findLastIndexOf(arr,val))