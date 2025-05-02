String.prototype.myIncludes = function(searchValue, fromIndex = 0) {
    // Write your code here
    let warr = searchValue.split('')
    let sarr = this.split('')
    if(fromIndex === 0){
        for(let i=0; i<sarr.length; i++){
            let count = 0
            for(let j=0;j<warr.length; j++){
                if(sarr[i]===warr[j]){
                    count++;
                    i++;
                }else{
                    break;
                }
            }
            if(count === warr.length){
                return true
            }
            else if(i+1===sarr.length){
                return false
            }
        }
    }else{
        for(let i=fromIndex; i<sarr.length; i++){
            let count = 0
            for(let j=0;j<warr.length; j++){
                if(sarr[i]===warr[j]){
                    count ++;
                    i++;
                }else{
                    break;
                }
            }
            if(count === warr.length){
                return true
            }
            else if(i+1===sarr.length){
                return false
            }
        }
    }
}

let str = 'hello world';
console.log(str.myIncludes('hello',-1));