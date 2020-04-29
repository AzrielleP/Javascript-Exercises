// This Exercise is similar to Reverse an Array found in Eloquent Javascript, but we'll just use the reverse method

function reverseNumber(number){
    // Convert number to an array
    let array = number.toString().split('').map(Number);
    //Convert it back
    return Number(array.reverse().join(""));
}

console.log(reverseNumber(122));