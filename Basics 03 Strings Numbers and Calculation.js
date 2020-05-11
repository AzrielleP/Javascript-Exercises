/*Exercise from CodeWars
Input: String which consists of two positive numbers (doubles) and exactly one operator like +,-,*,/, always between these numbers. The string is dirty, which means that there are different characters inside too, not only numbers and the operator. You have to combine all digits left and right, perhaps with "." inside (doubles) and to calculate the result which has to be rounded to an integer and converted to a string at the end.
*/

function calculateString(st) {
  //Filter out the letters and other symbols
  let x = st.match(/\d*(\.|\+|\*|\-|\/)*/g).join("");

  // Separate the two numbers
  let numbers = x.match(/(\d+(\.\d+)?)/g).map(Number);

  //Separate the operator
  let operator = x.match(/\+|\*|\-|\//g);

  //Do the math
  let result = null;
  switch (operator[0]) {
    case "+":
      result = numbers[0] + numbers[1];
      break;
    case "-":
      result = numbers[0] - numbers[1];
      break;
    case "*":
      result = numbers[0] * numbers[1];
      break;
    case "/":
      result = numbers[0] / numbers[1];
      break;
  }

  return Math.round(result).toString();
}

console.log(calculateString("fsdfsd234.4554s4234df+sf234442"));
