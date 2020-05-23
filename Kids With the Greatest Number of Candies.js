/*
From Leetcode

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
*/

function kidsWithCandies(candies, extraCandies) {
    let result = [];
    for (let i = candies.length - 1; i >= 0; i--){
         candies[i] += extraCandies;
        if(candies[i] == Math.max.apply(Math, candies)) result.unshift(true);
        else result.unshift(false);
        candies[i] -= extraCandies;
    }
    return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));