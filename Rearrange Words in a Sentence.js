/*From Leetcode
Given a sentence text (A sentence is a string of space-separated words) in the following format:

First letter is in upper case.
Each word in text are separated by a single space.
Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.
*/
 

function arrangeWords(text){
"use strict";

    let string = text.split(" ").map(x => {
        return x.toLowerCase()
    });
    
    let temp = string.map((el, i) => {
        return { index: i, value: el.length };
      })

    temp.sort((a,b) =>{
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
        else return 0;
    })
    
    let result = temp.map( x => {
        return string[x.index]
    }).join(" ");

    return String(result.charAt(0).toUpperCase() + result.slice(1));
}

console.log(arrangeWords(
    "Jtik hrzrvhbmk gbo cfhmiqwonj ojkew ufvledv bomoeqt ops jgi zdhvbpbb zczmepdfpm jry rjazc titttcu"));