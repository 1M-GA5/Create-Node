// Creating Nodes and Modifying Dom

var itemList = document.querySelector('#items'); 

//parent node 

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = 'gray' ;

// console.log(itemList.parentNode.parentNode.parentNode)


//parent element

// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = 'gray' ;

// console.log(itemList.parentElement.parentElement.parentElement);

//child node

// console.log(itemList.childNodes);

// console.log(itemList.children)

// console.log(itemList.children[1])

// itemList.children[1].style.backgroundColor = 'green'

// console.log(itemList.firstChild)

//first Element child 
// console.log(itemList.firstElementChild)

// itemList.firstElementChild.style.color = 'gray'

//last element 

// console.log(itemList.lastChild)

//lastElementChild

// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.backgroundColor ='green'

//nextSibling

// console.log(itemList.nextSibling);

//next element sibling
// 
// console.log(itemList.nextElementSibling)
// itemList.nextElementSibling.style.color = 'gray' //not here

//privious sibling
// console.log(itemList.previousSibling);

//previous element sibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='pink'

//create a element

//create a div

var newDiv = document.createElement('div')
newDiv.className ='Hello'

newDiv.id ='hello 1'

//add attributes
newDiv.setAttribute('title','hello Div')
console.log(newDiv)

//create text node

var newDivText =document.createTextNode('HEllo')

//append text
newDiv.appendChild(newDivText)

console.log(newDiv)

var container = document.querySelector('header .container')

var h1 = document.querySelector('header h1')

container.insertBefore(newDiv,h1)


//now add HEllo before item 1
var newDiv1 = document.createElement('div')
var newDivText1 =document.createTextNode('HEllo')

newDiv1.appendChild(newDivText1)
var add =document.querySelector('body .list-group')

console.log(add)

var h = document.querySelector('body .list-group-item')
add.insertBefore(newDiv1,h)


