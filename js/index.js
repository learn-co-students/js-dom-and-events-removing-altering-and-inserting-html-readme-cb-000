//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

let element = document.createElement('div');

element.innerHTML = 'Hello, DOM!';

element.style.backgroundColor = '#f9f9f9';

element.style.color = 'DarkOrange';

document.body.appendChild(element);

element.style.textAlign = 'center';

element.style.fontFamily = 'sans-serif';

let ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);

ul.style.textAlign = 'left';


let nestedOl = document.createElement('ol');

for (let i = 0; i < 8; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  nestedOl.appendChild(li);
}

document.querySelector('li').appendChild(nestedOl);

nestedOl.style.color = 'teal';