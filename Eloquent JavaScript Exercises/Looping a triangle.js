//Looping a triangle
let x = '#'
for (i=0; i<7; i++){
  console.log(x);
    x += '#';
}

// A better way to solve:

for (let x = "#"; x.length < 8; x +="#"){
  console.log(x);
}