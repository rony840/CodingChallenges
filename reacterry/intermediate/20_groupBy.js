export const groupBy = (array, key) => {
    return array.reduce(function(rv, obj) {
      (rv[obj[key]] = rv[obj[key]] || []).push(obj);
      return rv;
    }, {});
  }

const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 28 },
    { name: 'David', age: 42 }
  ];

console.log(groupBy(people, 'age'))