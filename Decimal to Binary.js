// Convert a decimal number to binary

// First way: Let's convert decimal to binary like what we're doing inside the classroom (aka successive division)


function decToBin(decimal){
    let binary = [];
    while (decimal >= 1){
        binary.unshift(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return binary.join("");
}

console.log(decToBin(15));

//But this only works for positive decimal numbers

// And here's the shorter version + works with negative digits

function decToBin_1 (decimal_1){
    return (decimal_1 >>> 0).toString(2);
}

console.log(decToBin_1(-14));