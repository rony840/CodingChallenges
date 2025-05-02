Array.prototype.myMap = function(callback) {
    // Write your code here
    let newArr = []
        for(let i=0; i<this.length; i++){
          let elem = (callback(this[i],i,this))
          newArr.push(elem)
        }
    return newArr
};

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.myMap(num => num * num);
console.log(squares);