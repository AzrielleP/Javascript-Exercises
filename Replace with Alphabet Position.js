/* From Codewars

Replace With Alphabet Position : 

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[A-Z]/g)
    .map((letter) => (letter = letter.charCodeAt(0) - 64))
    .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Logs 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
