let a = 7;
let b = 94;
let c = a;

a = b;
b = c;

console.log((b = a));
console.log((b = c));
