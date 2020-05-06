// See exercise on this link: https://cs50.harvard.edu/x/2020/psets/2/caesar/

function caesar(plainText, key) {
  //Check if the parameters are correct
  if (key <= 0) return "Invalid key.";

  // Convert plaintext to array
  let cipher = plainText.split("");

  // Create an array for small letters  97 and 122 are the decimal numbers of a and z, respectively)
  let small = [];
  for (let i = 97; i < 123; i++) small.push(String.fromCodePoint(i));

  // Create an array for big letters (65 and 90 are the decimal numbers of A and Z respectively)
  let big = [];
  for (let i = 65; i < 90; i++) big.push(String.fromCodePoint(i));

  for (let i = 0; i < cipher.length; ) {
    let element = plainText[i];
    if (big.includes(element)) {
      cipher[i] = big[(big.indexOf(element) + key) % 26];
      i++;
    } else if (small.includes(element)) {
      cipher[i] = small[(small.indexOf(element) + key) % 26];
      i++;
    } else i++;
  }

  return cipher.join("");
}

console.log(caesar("hello, world", 50));
