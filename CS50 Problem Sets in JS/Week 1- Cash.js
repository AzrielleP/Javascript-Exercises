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
//Output:  { quarters: 2, dimes: 0, nickels: 0, pennies: 4 }

// Another way of doing it:

function numberOfCoins(money){
    let coinCount =  [0,0,0,0];
    let coins = [25, 15, 5, 1];
    for (i = 0; money!=0; ){
        if (money >= coins[i]) {
            money -= coins[i]
            coinCount[i]++; 
        }
        else i++;
    }
    return coinCount;
}

console.log(numberOfCoins(54));



