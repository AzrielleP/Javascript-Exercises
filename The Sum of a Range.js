console.log(range(10,2, -2));
console.log(sum(range(10, 2, -2)));

function range (start, end, step =1){
    let listOfNum = [start];
    if (start < end){
        while (start < end){
            start += step;
            if (start <= end){
                listOfNum.push(start);
            }
            
        }
    }
    else{
        while (start > end){
            start -= Math.abs(step);
            if (start >= end){
                listOfNum.push(start);
            }
        }
    }
    return listOfNum;
}

function sum(array){
    let total = 0;
    for (i=0; i < array.length; i++){
        total += array[i];
        }
    return total;
}

