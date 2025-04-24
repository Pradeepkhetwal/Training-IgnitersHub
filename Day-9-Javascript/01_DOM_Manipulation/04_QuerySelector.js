// getting element by class name (it returns HTML collection)

const element0 = document.getElementsByClassName('list');

const arr = Array.from(element0);

arr.forEach(item => {
  console.log(item.textContent);
})
// With the help of querySelector we can select any element by it's class , id or directly by the element itself.

// The querySelector element returns the first element with the given id or class.

// directly selecting the first anchor element.
const element = document.querySelector('a');

console.log(element.textContent);

// selecting element by class name
const element2 = document.querySelector(".list");

console.log(element2.textContent);

// selecting the element by it's id.
const element3 = document.querySelector("#yh");

console.log(element3.textContent);


// Query Selector all returns all the elements with the given id or class or tag.

// It returns element in the form of Nodelist.
/* It is not an array, but it is an array-like object, which means:

It has a length property.

It can be accessed by index (e.g., nodelist[0]).

It is not directly iterable like an array (though modern browsers allow you to use forEach with it).
*/

const element4 = document.querySelectorAll('.list');

console.log(element4);