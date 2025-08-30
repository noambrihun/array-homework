let numbers= [32,74,84,65,75];
numbers.sort(function(a,b){return b-a});
console.log(numbers);

function getArrays(arr1,arr2) {
  let result = [];

  for(let i=0; i<arr1.length; i++) {
let val = arr1[i];
let foundInArr2 = false;

    for(let j=0; j<arr2.length; j++) {
        if(val === arr2[j]){
            foundInArr2 = true;
}
}
if(foundInArr2){
    let alreadyInResult = false;

    for(let k=0; k<result.length; k++) {
        if(result[k] === val){
            alreadyInResult = true;

 }
}
    if(!alreadyInResult){
        result.push(val);

    }
}
}
    return result;
}
let arr1 = [3,4,3,6,8];
let arr2 = [4,5,6,7,8];
console.log(getArrays(arr1,arr2));

function averageMatrix(matrix){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            sum += matrix[i][j];
            count++;

        }
    }
    return sum / count;

    }

    let mat = [[2,4,6],
    [8,10,12],
    [14,16,18]];
    console.log(averageMatrix(mat));


    function countAndRemove(arr, num) {
    let count = 0;
    let temp = [];

    while (arr.length > 0) {
        let last = arr.pop();  
        if (last === num) {
            count++; 
        } else {
            temp.push(last); 
        }
    }

    while (temp.length > 0) {
        arr.push(temp.pop());
    }

    return count;
}

let nums = [2, 5, 3, 5, 1, 5, 7];
let target = 5;

console.log( countAndRemove(nums, target)); 
console.log( nums);

