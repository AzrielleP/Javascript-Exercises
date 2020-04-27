
function reverseArray(array){
    newArray =[];
    for (i = 0; i < array.length ; i++){
        newArray.unshift(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array1){
    let swapTimes = Math.floor(array1.length/2);
    for (i = 0 ; i < swapTimes; i++){
        let container = array1[i];
        array1[i] = array1[array1.length-1-i];
        array1[array1.length-1-i] = container;
    }
    return array1;
}

console.log(reverseArray(["A", "B", "C"])); // output : ['C', 'B', 'A']
console.log(reverseArrayInPlace(["A", "B", "C", "D"])); // output: [ 'D', 'C', 'B', 'A' ]



