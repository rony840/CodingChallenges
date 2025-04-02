export const maxCharacters = (str) => {
    // Write your code here
    if (str.length == 0) {
      return null;
    }
    let carr = str.split('');
    let mrc = {
      selecChar: '',
      selecCount: 0,
      selecIndex: 0,
    };
    let rc = [];
    carr.forEach((e1, i) => {
      let count = 0;
      carr.forEach((e2) => {
        if (e1 == e2) {
          count++;
        }
      });
      if (count > 1) {
        let obj = {
          char: e1,
          count: count,
          index: i,
        };
        rc.push(obj);
      }
    });
    rc.forEach((obj, i) => {
      for (let k in obj) {
        if (obj['count'] == mrc.selecCount) {
          if (obj['index'] < mrc.selecIndex) {
            mrc = obj['char'];
            mrc.selecCount = obj['count'];
          }
        } else if (obj['count'] > mrc.selecCount) {
          mrc.selecChar = obj['char'];
          mrc.selecCount = obj['count'];
          mrc.selecIndex = obj['index'];
        }
      }
    });
    if (mrc.selecChar.length == 0) {
      return carr[0];
    }
    return mrc.selecChar;
};  

let str = 'eeeelhoooool'
console.log(maxCharacters(str))