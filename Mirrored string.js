//Write a program to check if two strings are a rotation of each other

function isStringMirrored(string){
    // convert the string to an array, reverse it, then convert it back as a string
    let reverse = string.split("").reverse().join("");
    if (string == reverse) return true;
    return false;
   
}

console.log(isStringMirrored("woow"));