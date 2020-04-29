//Write a program to find the missing number in a given integer array from 1 to 100

function missingNum (array){
    
    // First, let's test if there are missing numbers in the array
    // The formula to get the sum of consecutive numbers is n(n+n0)/2 , where n is the largest number and n0 is the smallest number.

    let sum = (array[array.length-1])*(array[array.length-1] + array[0])/2;
    if (sum == array.reduce((a,b) => a+b)) return "No missing numbers";
    
    // If there are missing numbers:
    
    let missed = [];

    // Let's start from the lowest number and loop until it reaches the largest number in the array
    for (let i = 0; i < array[array.length-1] ; i++){

        //Now let's check if the value in test that is +1 greater than the previous number is equal to the number in the next index. If it is equal to that number, then that number is not missing. If it is less than that number, then that might be a missing number!
        let test = array[i] +1;
        while(test < array[i+1]){
            missed.push(test);
            test++;
        } 
    }
    return missed;
}

console.log(missingNum([1,50,99,100]));


