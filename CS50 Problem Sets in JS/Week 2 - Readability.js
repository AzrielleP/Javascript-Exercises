// See https://cs50.harvard.edu/x/2020/psets/2/readability/ for the exercise

// First try:
function read(string){

    // Convert the string to an array
    let arr = string.split("");

    //Count the number of words
    let words = arr.filter(x => x === " ").length + 1;

    //Count the number of sentences
    let sentences = arr.filter(x => x === "." || x === "!" || x === "?").length; 

    // Count the number of letters in the string. Exclude special characters.
    let letters = string.replace(/[&\/\\#,!+()$~%.'":*?<>{}]/g, '').split("").filter(x => x!== " ").length;

    // Formula for Coleman-Liau index:
    index = Math.round(0.0588 * (100 * letters / words) - 0.296 * (100 * sentences / words) - 15.8)
    return "Grade: " + index;
}

let x = "Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.";
console.log(x + "\n" + read(x));