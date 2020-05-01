/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.

*/

console.log(range(10,2, -2));
console.log(sum(range(10, 2, -2)));

console.log(range_1(10,2, -2));
console.log(sum(range_1(10, 2, -2)));

function range (start, end, step =1){
    let listOfNum = [start];
    if (start < end){
        while (start < end){
            start += step;
            if (start <= end){
                listOfNum.push(start);
            }
            
        }
    }
    else{
        while (start > end){
            start -= Math.abs(step);
            if (start >= end){
                listOfNum.push(start);
            }
        }
    }
    return listOfNum;
}

//This is a better way:

function range_1(start, end, step = start > end ? 1 : -1){
    let listOfNum = [];
    if (start < end){
        for (; start <= end; start+=step)
            listOfNum.push(start);
    }
    else{
        for (; start >= end; start+=step)
            listOfNum.push(start);
    }
    return listOfNum;
   
}

function sum(array){
    let total = 0;
    for (i=0; i < array.length; i++){
        total += array[i];
        }
    return total;
}

