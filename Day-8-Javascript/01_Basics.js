
"use strict"

// Variables.

// It will not run bcoz of use strict.
// a = 10;
// console.log(a)

// cannot re-declare variable with name c as it is declared already by using let. 
let c = 10;
console.log(c)

// can re declare variable when it is decalred using var.

var b = 10;
console.log(b)

var b = 12;
console.log(b);

// constants.

const pi = 3.14;

console.log(pi)


// assignment to contants can't be done .
// pi = 4;
// console.log(pi);


// String.

let naam = "Pradeep";

console.log(naam[0]);

let akhrinaam = "Singh";

// concatenation.

let full = naam + " "+ akhrinaam;

console.log(full);

naam = " xys ";

console.log(naam);

// length counts spaces as well with the inverted comans.

console.log(naam.length);


// toUpperCase (it do not alter the original string , but returns a new string).

let upper = naam.toUpperCase();

console.log(upper);


let lower = naam.toLowerCase();
console.log(lower);

// trim is used to remove spaces from the string.It also do not alter the original string.

console.log(naam.trim());
console.log(naam);

// slicing.
naam = "123456";

// here 1 is starting index and 2 is ending index , here last index is not included . It do not alter the original string.
let sliced = naam.slice(1, 2);
console.log(sliced);
console.log(naam);

// template string.

let year = 4
naam = "Pradeep";
let template = `hello my name is ${naam} and i am in my ${year} year currently`;

console.log(template);





