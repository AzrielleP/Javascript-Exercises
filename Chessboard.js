let size = 8;
x="";
for (j=0; j<size; j++){
  for(i=0; i < size; i++){
    if((i+j) % 2 == 0){
      x+="#";
    }
    else{
      x+=" ";
    }
  }
  x+="\n";
}
console.log(x);