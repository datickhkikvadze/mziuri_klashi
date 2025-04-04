
const header = document.querySelector('h1')
console.log(header)
header.style.color = 'red'
header.style.fontSize = '60px'
header.style.backgroundColor = 'blue'




// !classlist
// !add,remove,toggle

header.classList.add('first-title')

//  !  createElement & appendChild

const text = document.createElement('p')
console.log(text)

text.innerText = 'this is a paragraph'
console.log(text)

header.appendChild(text)