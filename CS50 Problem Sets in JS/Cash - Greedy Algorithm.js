// Check the exercise here: https://cs50.harvard.edu/x/2020/psets/1/cash/

function howManyCoins(price){
    let coinCount =  {quarters: 0, dimes: 0, nickels:0, pennies:0};
    let quarter = 25, dime = 10, nickel = 5, penny = 1;

    while (price !=0){
        if (price >= quarter){
            price -= quarter;
            coinCount.quarters ++;
        }
        else if(price >= dime){
            price -= dime;
            coinCount.dimes ++;
        }
        else if(price >= nickel){
            price -= nickel;
            coinCount.nickels ++;
        }
        else{
            price -= penny;
            coinCount.pennies ++;
        }

    }
    return coinCount;
}

console.log(howManyCoins(54));