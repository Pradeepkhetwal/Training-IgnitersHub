// let and const are block scope i.e they can't be accessed outside the block.
// var is fucntion scope i.e it can be accessed outside the block.
{
  let a = 10;
  console.log(a);

  const b = 10;
  console.log(b);
  

  var c = 10;
  
} 
// It will give error
// console.log(a);
// console.log(b);


// It will not give error.
console.log(c);




