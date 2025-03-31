export const sumOfThirds = (arr) => {
    return arr.reduce((acc, curr, index) => {
      if ((index + 1) % 3 === 1) {
        return acc + curr;
      } else {
        return acc;
      }
    }, 0);
  };

let array = [1,2,3,4,5,6]
console.log(sumOfThirds(array))