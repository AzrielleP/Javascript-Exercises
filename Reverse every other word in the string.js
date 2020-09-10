/* From Codewars

Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){
  const arrayedString = str.split(' ').filter(x => x !== '');
  for (let i = 0; i < arrayedString.length; i++) {
    if (i % 2 !== 0) {
      arrayedString[i] = arrayedString[i].split('').reverse().join('');
    }
  }
  return arrayedString.join(' ');
}

console.log(reverse("Reverse this string,   please!"));