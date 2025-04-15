export const callbackAtMostOnce = (callback) => {
    // Write your code here
    let once = false
    return function (...args){
      if(once == false){
      once = true
      return callback(...args)
    }
    }
  }