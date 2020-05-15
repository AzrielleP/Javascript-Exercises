// CS50 problem. See https://cs50.harvard.edu/x/2020/psets/1/credit/.

//First trial:

function isValid(card) {
  // Convert integer to an array
  let cardNum = Array.from(card.toString()).map(Number).reverse();

  //Test Using Luhn's Algorithm
  //First step: Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products’ digits together.

  let firstTest = cardNum
    .filter((alt, index) => index % 2 != 0)
    .map((num) => num * 2)
    .reduce((sum, currValue) => {
      if (currValue >= 10) currValue = 1 + (currValue % 10);
      return sum + currValue;
    }, 0);

  // Second step: Add the sum to the sum of the digits that weren’t multiplied by 2.

  let secondTest =
    firstTest +
    cardNum.filter((alt, index) => index % 2 == 0).reduce((a, b) => a + b);

  // Third step: If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid

  let thirdTest = null;
  if (secondTest % 10 == 0) thirdTest = true;

  // Determine the type of card

  if (thirdTest == true) {
    if (cardNum.length == 15) {
      if (
        card.toString().indexOf("37") == 0 ||
        card.toString().indexOf("34") == 0
      )
        return "Valid AMEX Card";
    } else if (cardNum.length == 13 || cardNum.length == 16) {
      if (cardNum[0] == 4) return "Valid VISA Card";
      else if (cardNum[0] == 5 || cardNum[1] <= 5)
        return "Valid MasterCard card";
    }
  }
  return "Invalid Card";
}

console.log(isValid(4003600000000014));
