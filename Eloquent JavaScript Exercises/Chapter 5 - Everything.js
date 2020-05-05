/*Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.*/

//First version: loop

function every (array, test){
    for (let element of array){
        if (test(element) == false) return false;
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

//Second Version: some method (apply de Morgan's rule)

function everyNSome(array, test){
    return !array.some(element => !test(element));
}

console.log(everyNSome([1, 3, 5], n => n < 10));
console.log(everyNSome([2, 4, 16], n => n < 10));
console.log(everyNSome([], n => n < 10));