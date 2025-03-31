export const joinArrays = (arrOne, arrTwo) => {
    // Write your code here
    return ([...arrOne,...arrTwo])
  }

  let a1 = [1, 2, 3]
  let a2 = [4, 5, 6]

  console.log(joinArrays(a1,a2))