// From Codewars: Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {

  let cakeCount = 0, 
    Recipe = Object.entries(recipe).sort(), 
    Available = Object.entries(available).sort();

  // Check if we have the available ingredients for the recipe
  for (let element of Object.keys(recipe)) {
    if (!Object.keys(available).includes(element)) {
      return cakeCount;
    }
  }

  // Remove the ingredients in available that are not in the recipe
  let avaiLength = Available.length -1;
  for (let i = 0;;) {
    
    if (!Object.keys(recipe).includes(Available[i][0])) {
      Available.splice(i,1);
      avaiLength --;
      i--;
    }
    i++;
    if (i > avaiLength) break;
  }

  //Do the math
  for (let i = 0; ; i++) {
    if (Available[i][1] >= Recipe[i][1] && Recipe[i][1] > 0) {
      Available[i][1] -= Recipe[i][1];
    } else {
      return cakeCount;
    }
    if (i == Recipe.length - 1) {
      cakeCount++;
      i = -1;
    }
  }
}

console.log(
  cakes(
    { flour: 50, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 1 }
  )
);
