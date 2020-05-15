/* From code wars:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

let array = [0,1,1,1];

console.log(array.reverse().map((n, index)=> n*Math.pow(2, index)).reduce((a,b)=>a+b));

/* Explanation:

reverse() method :
- Arrays start with an index of 0 from left to right. However, binary numbers have its least significant bit (2^0) from right to left. If we use the reverse method, we will solve this issue.

map() method:
- To convert a binary number to a decimal number, we will multiply "each" digit by 2^n where n is its index.

reduce() method:
- Part of the process to convert a binary to decimal number is to add all the products we gained from our map() method. The reduce method is a good way to get the sum of all the elements in an array and return a single value. Our single value now is the decimal number we're aiming for.
*/

// But here's the simplest solution! (from codewars)

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);