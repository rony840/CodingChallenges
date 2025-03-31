export const getLongerThanFour = (array) => {
    // Write your code here
    let word = null
    array.reverse().forEach((e,i)=>{
        if (e.length > 4){
            word = e
          return word
        }else{ return null }
      })
    return word
  }

  let arr = ['hello', 'world', 'foo']
 console.log(getLongerThanFour(arr))


// Optimized Way:
//  export const getLongerThanFour = (array) => {
//     return array.find(str => str.length > 4) || null;
//   }