// From Leetcode: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.//

function moveZeroes(nums){

    //Count the number of zeroes
    let count = 0;
    for (let element of nums){
        if(element == 0){
            count++;
        }
    }

    //Swap the elements
    function swap(){
        for(let i=0; i < nums.length - 1; i++){
            if (nums[i] == 0){
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }
        }
        return nums;
    }

    //Check if all zeroes are at the end of the array
    for(x = 1; x <= count; x++ ){
        if (nums.length -x !== 0){
            swap();
        }
    }
    return nums; 
}

console.log(moveZeroes([0,1,0,3,12]));