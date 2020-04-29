//Return 1 when ANY odd bit of x equals 1; 0 otherwise.
//from code wars

function anyOdd(number){
    //Convert to binary
    let bin = (number >>> 0).toString(2);

    //Start counting from the last
    for(let i = bin.length-2; i >=0; i-=2){
        if (bin[i]==="1")
        return 1;
    }
     return 0;
        
    
    

}

console.log(anyOdd((2863311530)));