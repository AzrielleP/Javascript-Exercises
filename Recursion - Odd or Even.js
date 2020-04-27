//Check if the number is odd or even using recursion

function isEven(N){
    if(N==0){
        return true;
    }
    else if(N==1){
        return false;
    }
    else if(N < 0){
        return isEven(-N);
    }
    else{
        return isEven(N-2);
    }
}

console.log(isEven(-2));