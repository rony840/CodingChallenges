export const checkPasswordStrength = (password) => {
    // Write your code here
    let strength = ''
    if(password.length < 8){
        strength = 'weak'
    }else if(password.length === 8){
        let parr = password.split('')
        let flag = ''
        for(let i=0; i<parr.length; i++){
            let lowerChar = parr[i].toLowerCase()
            let upperChar = parr[i].toUpperCase()
            if(parr[i] === lowerChar){
                if(flag === 'lower'){

                }else if(flag === 'upper'){
                    strength = 'strong'
                    console.log('strong trigger 1')
                    break;
                }else{
                    flag = 'lower'
                }
            }else if(parr[i] === upperChar){
                if(flag === 'upper'){

                }else if(flag === 'lower'){
                    strength = 'strong'
                    console.log('strong trigger 2')
                    break;
                }else{
                    flag = 'upper'
                }
            }
            if(i+1 === parr.length){
                if(strength === ''){
                    strength = 'medium'
                }
            }
        }
    }else if(password.length >= 8){
        let parr = password.split('')
        let upperCount = 0
        let lowerCount = 0
        for(let i=0; i<parr.length; i++){
            let lowerChar = parr[i].toLowerCase()
            let upperChar = parr[i].toUpperCase()
            if(parr[i] === lowerChar){
               lowerCount++
            }else if(parr[i] === upperChar){
                upperCount++
            }
            if(i+1 === parr.length){
                if(strength === ''){
                    if(upperCount>0 && lowerCount>0){
                        strength = 'strong'
                        break;
                    }else{
                        strength = 'medium'
                    }
                }
            }
        }
    }
    return strength
};

let pass = 'password'
console.log(checkPasswordStrength(pass))

//optimized solution:
// export const checkPasswordStrength = (password) => {
//     let strength = 0;
  
//     if (password.length < 6) {
//       return 'weak';
//     }
  
//     if (password.match(/[a-z]+/)) {
//       strength += 1;
//     }
//     if (password.match(/[A-Z]+/)) {
//       strength += 1;
//     }
//     if (password.match(/[0-9]+/)) {
//       strength += 1;
//     }
//     if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) {
//       strength += 1;
//     }
  
//     if (strength < 2) {
//       return 'weak';
//     } else if (strength === 2) {
//       return 'medium';
//     } else {
//       return 'strong';
//     }
//   }