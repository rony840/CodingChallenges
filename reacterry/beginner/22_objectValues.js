export const getValues = (object) => {
    // Write your code here
    let values = []
    for (let k in object){
      values.push(object[k])
    }
    return values
  }

  let obj = { foo: 1, bar: 2, baz: 3 }
  console.log(getValues(obj))