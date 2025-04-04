const sigmaDiv = document.getElementById('sigmaDiv')
const sigmaDivjr = document.createElement('div')

sigmaDiv.appendChild(sigmaDivjr)

const h1 = document.createElement('h1')
const img = document.createElement('img')
const link = document.createElement('a')
const link2 = document.createElement('a')
const paragraph = document.createElement('p')

sigmaDivjr.setAttribute('id','sigmaDivjr')
h1.innerText = 'This is a heading'
img.setAttribute('src','random.jpg')
img.width = 50
img.height = 50
link.innerText = 'Click here to visit Google'
link.href = 'https://www.google.com'
link2.innerHTML = '<br>Click here to visit opera'
link2.href = 'https://www.opera.com'
paragraph.innerText = 'This is a paragraph.'

sigmaDivjr.appendChild(h1)
sigmaDivjr.appendChild(img)
sigmaDivjr.appendChild(link)
sigmaDivjr.appendChild(link2)
sigmaDivjr.appendChild(paragraph)
