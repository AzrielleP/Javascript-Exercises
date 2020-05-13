function solve(a,b){
    a = a.split("");
    b = b.split("");
    return a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x))).join('');
}

console.log(solve("xyab","xzca"));