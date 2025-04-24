// Selecting an element by id.

const element = document.getElementById('yh')
const div = document.getElementById('div');
console.log(element);

console.log(element.textContent);

// use of .innerHTML
//1. Used to retrieve the html content of any element.

// it will give what is inside yh tag i.e it's content.
console.log(element.innerHTML);

// it will give what is inside the div i.e all the html content.
console.log(div.innerHTML);

// 2.used to set html content inside any element.

// so here we have added this html tag(html content) inside the div.It will add this h3 inside div and will remove all the other children present in the div.
// div.innerHTML = '<h3>Hello bro</h3>';

// we can get many details of any element like this as well.


// getting the id of this element.
const yahoo = document.getElementById('yh').id;
console.log(yahoo);

// class keyword is reserved so className is used to get the name of the class of the element whose id is yh.
const yahooClass = document.getElementById('yh').className;
console.log(yahooClass);

// We are simply getting the id here just as above.
const ya = document.getElementById('yh').getAttribute('id');
console.log(ya);

//getting the class name of this element
const yac = document.getElementById('yh').getAttribute('class');
console.log(yac);


//setting an elements attribute like class and id.

// set attribute does not return anything (just undefined)

 document.getElementById('yh').setAttribute('id', 'yhh');

const yhid = document.getElementById('yhh');
console.log(yhid);


// it will remove the existing class and will change it to test. If you want more than one classes in this element simply use spacing like 'test secondclass' like this.
document.getElementById('fb').setAttribute('class', 'test');

const fb = document.getElementById('fb');

console.log(fb);
