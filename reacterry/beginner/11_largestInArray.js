export const findMax = (arr) => {
    // Write your code here
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

  let array = [-5, -10, -1, -2]
  console.log(findMax(array))