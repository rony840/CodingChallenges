// input = ['A', 'B', C', 1, 2, 3, '4', '5', 6,'@','~']
// * Split the string, integer, and special characters arrays.
// * Make sure 4 and 5 which is a string array list and convert it to integer.
// Console Output:
// integer = [1,2,3,4,5,6]
// string = [ 'A','B','C']
// chars = ['@', '~' ]

let arr = ['A', 'B', 'C', 1, 2, 3, '4', '5', 6,'@','~']

let string = []
let integer = []
let char = []

for (let elem of arr ){
    let type = typeof elem
    if(type == 'string'){
        let elem1 = elem-1
        if(isNaN(elem1)){
            let isSpecialChar = /[@~]/.test(elem);
            isSpecialChar? char.push(elem) : string.push(elem);
        }else{
            elem1 = parseInt(elem)
            integer.push(elem1)
        }
    }
    else if(type == 'number'){
        integer.push(elem)
    }
}

console.log('String = ',string);
console.log('Integer = ',integer);
console.log('Chars = ',char);


// 2. Follow-up questions for integer array.
// integer = [1,2,3,4,5,6]
// Split it
// to 2 arrays with random elements
// example:
// Output_1:
// array_1 = [ 1,4,6 ]
// array_2 = [ 2,3,5 ]
// Output_2: Sum each array
// array_1 = 11
// array_2 = 10

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let shuffledArray = shuffleArray(integer)
let array_1 = shuffledArray.slice(0,3);
let array_2 = shuffledArray.slice(3);
console.log('array_1 = ',array_1);
console.log('array_2 = ',array_2);
console.log('array_1 = ',array_1.reduce((sum, a) => sum + a, 0));
console.log('array_2 = ',array_2.reduce((sum, a) => sum + a, 0));