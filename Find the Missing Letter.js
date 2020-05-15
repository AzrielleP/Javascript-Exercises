/*From Code Wars
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
*/

function findMissingLetter(array){
    for (let count = 0; count < array.length -1 ; count++){
        if(array[count+1].codePointAt(0) - array[count].codePointAt(0)!== 1)
            return String.fromCodePoint(array[count].codePointAt(0) +1);
        
    }
}

console.log(findMissingLetter(["a","b","c","d","f"]));

