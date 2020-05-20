//From Codewars

function encode(string) {
    let nums = {'a': 1,  'e': 2, 'i': 3, 'o':4, 'u':5};
    return string.replace(/[aeiou]/g, x=>nums[x]);
}


function decode(string) {
    let letters = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
    return string.replace(/[12345]/g , x => letters[x]);
}


console.log(encode("This is an encoding test."));
console.log(decode('h2ll4'));