//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

// Create element
let element = document.createElement('div');

// Change/add properties
element.innerHTML = "Hello, DOM!";
element.style.backgroundColor = '#f9f9f9';

// Insert into DOM
document.body.appendChild(element);

// properties can be changed after inserting as well
element.style.textAlign = 'center';

// Append elements to the new element
let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);

// fix
ul.style.textAlign = 'left';

// Remove Elements
// Remove second li from ul
ul.removeChild(ul.querySelector('li:nth-child(2)'));

// Remove the entire ul...
ul.remove();
