//Write a program to find the 2nd largest number in an unsorted integer array

//First try:

function secondLargest(array){
    let grande = null;
    for (let i = 0; i <array.length ; i++){
        let venti = array[i];
        if (venti > array[i+1]) {
            grande = array[i+1];
        }
        else{
            grande = venti;
            venti = array[i+1];
        }
    
    }
    return grande;
}

console.log(secondLargest([2,6,1,4,5,10,20,15]));

// But here's a better solution

function secondLargest_1(array_1){
    // Let's look for the largest number
    let largest = Math.max(array_1);

    //Eliminate that number in the array and then get the largest!
    let second = Math.max(array_1.splice(array_1.indexOf(largest)));
    return second;
}

console.log(secondLargest_1([2,6,1,4,5,10,20,15]));