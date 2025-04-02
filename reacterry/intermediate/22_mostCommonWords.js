export const mostCommon = (arr) => {
    // Write your code here
    if (arr.length == 0) {
      return null;
    }
    let warr = [...arr]
    let mrw = {
      selecWrd: '',
      selecCount: 0,
      selecIndex: 0,
    };
    let rw = [];
    warr.forEach((e1, i) => {
      let count = 0;
      warr.forEach((e2) => {
        if (e1 == e2) {
          count++;
        }
      });
      if (count > 1) {
        let obj = {
          wrd: e1,
          count: count,
          index: i,
        };
        rw.push(obj);
      }
    });

    rw.forEach((obj, i) => {
      for (let k in obj) {
        if (obj['count'] == mrw.selecCount) {
          if (obj['index'] < mrw.selecIndex) {
            mrw = obj['wrd'];
            mrw.selecCount = obj['count'];
          }
        } else if (obj['count'] > mrw.selecCount) {
          mrw.selecWrd = obj['wrd'];
          mrw.selecCount = obj['count'];
          mrw.selecIndex = obj['index'];
        }
      }
    });
    console.log(mrw)
    if (mrw.selecWrd.length == 0) {
      return warr[0];
    }
    return mrw.selecWrd;
};

let arr = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry']
console.log(mostCommon(arr))