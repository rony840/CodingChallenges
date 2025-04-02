export const firstCharacter = (str) => {
    // Write your code here
    let carr = str.split('')
      let nrc = null
      carr.forEach(e1 => {
          let count = 0
          carr.forEach(e2 => {
              if (e1==e2) {
                  count++
              }
          })
          if (nrc == null && count == 1){
              nrc=e1
          }
      })
      return nrc
  }

  let str = 'eeeelhoool'
  console.log(findCharacter(str))