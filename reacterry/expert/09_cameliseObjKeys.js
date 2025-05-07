export const camelise = (obj) =>{
    const result = {};
    const keys = Object.keys(obj);
  
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = obj[key];
  
      if (Array.isArray(value)) {
        result[camelCase(key)] = value.map(v => {
          if (typeof v === 'object' && v !== null) {
            return camelise(v);
          } else {
            return v;
          }
        });
      } else if (typeof value === 'object' && value !== null) {
        result[camelCase(key)] = camelise(value);
      } else {
        result[camelCase(key)] = value;
      }
    }
  
    return result;
  }
  
  function camelCase(str) {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

let obj = {
    user_name: 'john_doe',
    email_address: 'john.doe@example.com',
    address: {
      line_1: '123 Main St',
      line_2: '',
      city: 'Anytown',
      state: 'CA',
      zip_code: '12345',
      country: null
    },
    phone_numbers: [
      '555-1234',
      '555-5678'
    ]
  };

let cameliseObj = camelise(obj);

console.log(cameliseObj);

//failed attempt:
// export const camelise = (obj) => {
//     // Write your code here
//     const func = (ob) => {
//         let object = {}
//         for (let k in ob){
//             let karr = k.split('_')
//             let carr = karr[1]?.split('')
//             let sec = carr? carr[0].toUpperCase() : undefined
//             carr?.splice(0,1,sec)
//             let newKey = carr?.reduce((acc,curr)=>acc+curr)
//             let newObj = {}
//             newObj[newKey?karr[0]+newKey:k] = obj[k]
//             object = {...newObj}
//         }
//         return object
//     }
//     let object = {}
//     for (let k in obj){
//         let chunk = {}
//         chunk[k] = obj[k]
//         if(typeof(obj[k]) !== 'string'){
//             let object2 = {}
//             for(let k2 in chunk[k]){
//                 let chunk2 = {}
//                 chunk2[k2] = chunk[k][k2]
//                 console.log('chunk2',chunk2)
//                 object2 = {...object2,...func(chunk2)}
//             }
//             object = {...object,...object2}
            
//         }else{
//             object = {...object,...func(chunk)}
            
//         }
//     }
    
//     return object
// }