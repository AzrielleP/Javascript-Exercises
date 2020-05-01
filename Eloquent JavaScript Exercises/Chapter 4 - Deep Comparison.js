/*
Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

*/

function deepEqual(x,y){
    if (x === y) return true;

    //Test if both are objects and are not null
    if (typeof x != "object" || typeof y != "object" || x == null && y ==null) return false;

     //test if number of properties are the same
    let propertyX = Object.keys(x);
    let propertyY = Object.keys(y);
    if (propertyX.length != propertyY.length) return false;

    //test for values
    for (let val of propertyX){
        if(!propertyY.includes(val) || !deepEqual(x[val], y[val]))
        return false;
        }

    return true;
 
}


let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
