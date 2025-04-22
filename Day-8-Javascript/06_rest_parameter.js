// Rest parameters are used in cases where multiple arguments are passed to the function. Meaning the actual number of arguments is unclear.

//Here apart from the first 2 arguements the rest will be stored in the array c.
function Print(a, b, ...c) {
  console.log(`i am ${a}`);
  console.log(`i am ${b}`);
  console.log(`i am `, c);
}

Print(1, 2, 4, 5, 6, 7, 8);

function Sum(...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }

  return sum;
}

let res = Sum(1, 1, 1, 1, 1, 1, 1);

console.log(res);

