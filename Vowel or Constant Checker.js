// Create a program to check whether a character is a vowel or a consonant.

//First try:
function isVowel (charc){
    if (charc == "a"|| charc == "e" || charc == "i" || charc == "o" || charc == "u") return true;
    else return false;
}

console.log(isVowel("a"));

// But this function only accepts small letters and vowels that are in capital letters will return to false. Also, it is tedious to type all five vowel characters with an if and or statement. (For me!)

// Let's try another one

function isVowel_1 (charc_1){
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    return vowels.includes(charc_1);
}

console.log(isVowel_1("b"));

// Let's modify the above code to return "Vowel" or "Consonant" 

function isVowel_2 (charc_2){
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    return vowels.includes(charc_2) ? "Vowel" : "Consonant";
}

console.log(isVowel_2("A"));