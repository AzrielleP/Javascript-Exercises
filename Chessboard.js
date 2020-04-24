size = prompt("Enter the size:");
x="";
k="";
for (j=0; j<size; j++){
  for(i=0; i < size; i++){
    k = i+j;
    if(k%2==0){
      x+="#";
    }
    else{
      x+=" ";
    }
  }
  x+="\n";
}
console.log(x);