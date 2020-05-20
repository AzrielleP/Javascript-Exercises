

class PGroup{
  constructor() {
    this.array = [];
  }

  add(value) {
    if(!this.has(value))
    return new this.array.concat(value);
  }

  delete(value) {
    if (this.has(value)) return this.array.splice(this.array.indexOf(value), 1);
  }

  // or use: return this.array.filter( x => x !== value)
  
  has(value) {
    return this.array.includes(value);
  }
  
}

PGroup.empty = [];


let a = PGroup.empty.add("a");
/*
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
*/