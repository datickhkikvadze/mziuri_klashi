const header = document.querySelector('title')
console.log(header);

const new_h5 = document.createElement('h5')
const new_h6 = document.createElement('h6')

new_h5.innerText = 'bird'
new_h6.innerText = 'valera'

console.log(new_h5, new_h6);

// header.append(new_h5, new_h6)

header.prepend(new_h5, new_h6)


// !insetBefore

const lists = document.querySelector('ul')

const seccondList = document.querySelector('ul li:nth-child(2)')

const new_list = document.createElement('li')

new_list.innerHTML = 'milk'


console.log(new_list)

console.log(seccondList)

lists.insertBefore(new_list , seccondList)

// ! removeChild $ remove

lists.removeChild(seccondList)

seccondList.remove()

//! nextElementSibling
//! previousElementSibling

console.log(seccondList.previousElementSibling);
console.log(seccondList.nextElementSibling);

const body = document.body

console.log(body.children[1]);
// console.log(body.);