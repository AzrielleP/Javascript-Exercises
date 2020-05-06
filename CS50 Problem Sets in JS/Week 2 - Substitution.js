// See link for the exercise: https://cs50.harvard.edu/x/2020/psets/2/substitution/

function substitution(text, key) {
    
  //Key should contain 26 letters
  if (key.length != 26) return "Invalid key.";

  //Transform key to array:
  let keyArr = key.split("");

  //Transform text to array:
  let cipher = text.split("");

  // Create an array for small letters  97 and 122 are the decimal numbers of a and z, respectively)
  let small = [];
  for (let i = 97; i < 123; i++) small.push(String.fromCodePoint(i));

  // Create an array for big letters (65 and 90 are the decimal numbers of A and Z respectively)
  let big = [];
  for (let i = 65; i < 90; i++) big.push(String.fromCodePoint(i));

  for (i = 0; i < cipher.length; i++) {

    let element = cipher[i];

    if (small.includes(element))
      cipher[i] = keyArr[small.indexOf(element)].toLowerCase();

    else if (big.includes(element)) 
      cipher[i] = keyArr[big.indexOf(element)];
  }

  return cipher.join("");
}

console.log(substitution("heWEllo, world!", "VCHPRZGJNTLSKFBDQWAXEUYMOI"));
