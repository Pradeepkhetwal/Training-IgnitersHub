/*

The DOM (Document Object Model) is a representation of your HTML document as a tree structure. Each element in your HTML page is an object that can be accessed and manipulated via JavaScript.

WindowObject -:t's the global object in JavaScript that represents the browser window and provides access to other browser-related features, like document.

DocumentObject-: When the browser parses the html webpage it creates a document object of that webpage which consists of all the details of the elements present in the webpage.

This document object is present inside the window object. so we can access it by window.document

But as window object is present by default we can skip writing window. so we can directly access the document object by writing document only.

Every element in the DOM tree is a node.

*/

// printing the document object.
console.log(document);



// HTML Collection-:An HTMLCollection is a live collection of DOM elements. It is returned by several DOM methods, such as getElementsByClassName(), getElementsByTagName(), and getElementsByName(). Despite being similar to an array, an HTMLCollection is not a true JavaScript array. This means it doesn't have array methods like map(), forEach(), filter(), or reduce() out of the box.

// We can access elements from the HTMLCollection using the index as well the first element in the coollection is at 0th index.

// will give all the links(anchor tags) present in the webpage in the form of HTML collection.
const collection = document.links

console.log(collection);
console.log(collection[0]);
console.log(collection[0].textContent);

// When we deal with the HTML collection we usually convert it to array using the Array.from(HTML collection) method. So that we can apply array methods like loop and all over this.
// We have made array of this htmlcollection now we can easily apply loop on arry to iterate the elements present in the array(arr).
const arr = Array.from(collection);




// innerText vs textContent methods.

// innerText usually consider the css styling which means if inside any element any text is hidden or is not shown in the webpage due to color matching with the background color so this innerText will show only that text which is visible in the webpage.

// TextContent-: It does not consider any CSS styling which means even if the text is hidden it will be shown in the console.