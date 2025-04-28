Array.prototype.myFilter = function(callback) {
    // Write your code here
    let newArr = []
      for(let i=0; i<this.length; i++){
        if(callback(this[i],i,this)){
          newArr.push(this[i])
        }
      }
    return newArr
};