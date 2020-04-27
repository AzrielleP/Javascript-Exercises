function deepEqual(x,y){
    if (x === y) return true;

    //Test if both are objects and are not null
    if (typeof x == "object" && typeof y == "object" && x != null && y!=null){

        //test if number of properties are the same
        let propertyX = Object.keys(x);
        let propertyY = Object.keys(y);
        if (propertyX != propertyY) return false;

        for (let val of x){
            if(propertyY.includes(val))
            return true;
        }


    }
    else{
        return false;
    }
}


let obj = {here: {is: "an"}, object: 2};

//console.log(deepEqual(obj, obj));

//console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
