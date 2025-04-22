// Normal decalaration.



function sum( a,  b) {
  return a + b;
}

let ans = sum(1, 1);
console.log(ans);


// Function as an expression.

const add = function(a,b,c) {
  return a + b + c;
}
console.log(add(1, 1, 1));


// arrow function with default parameter.

const arrow = (a,b=0) => {
  return a*b
}


console.log(arrow(3,5));
console.log(arrow(3));
