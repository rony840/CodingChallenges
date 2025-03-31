export const sumOfEvens = (arr) => {
    // Write your code here
    if (arr.length == 0){
      return 0
    }
    let even = arr.filter((e,i)=> e%2 == 0)
    return(even.reduce((a,c)=> a+c,0))
  }

  let array = [1,2,3,4,5]
  console.log(sumOfEvens(array))
