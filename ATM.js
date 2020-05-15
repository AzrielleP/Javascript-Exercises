/*From Codewars
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
*/

function numberOfNotes(money){
    let billCount =  0;
    let bills = [500, 100, 50, 20, 10];
    let length = bills.length -1;
    for (i = 0; money>=0; ){
        if (money >= bills[i]) {
            money -= bills[i]
            billCount++; 
            if (money == 0) return billCount;  
        }
        else i++;
        if (i > length) return -1;
        
    }
}

console.log(numberOfNotes(770));