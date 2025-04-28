export const validatePasswords = (first, second) => {
    // Write your code here
    if (first !== second) {
      return false;
    }
  
    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordFormat.test(first);
}

let p1 = 'avc';
let p2 = 'acd';
console.log(validatePasswords(p1,p2))