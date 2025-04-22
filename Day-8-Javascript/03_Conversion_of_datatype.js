// converting string to number.

// Note-: Type conversion do not alter the datatype of original variable it returns a new of varible of the desired datatype.

// method 1-:

let p = "abc"

// by adding + infront of string it becomes number type. instead of "abc" you can directly write p as well.
let x = +"abc";

console.log(typeof x);


// method 2-:

// by simply writing Number and inside parenthesis passing the string.

let num = Number(p);
console.log(typeof num);
console.log(typeof p);


// Converting Number to String.

// Method 1:

let a = 10;
let b = "string";

// simply add an empty string with the number.

let ans = a + "";
console.log(typeof ans);


// Method 2:

// simply again use the String and inside the parenthesis write the number with you want to convert to string.

ans = String(a)

console.log(typeof ans);

// Through this method you can convert to any data type.

ans = Boolean(a);
console.log(typeof ans);

ans = BigInt(a);
console.log(typeof ans);


// so on.

