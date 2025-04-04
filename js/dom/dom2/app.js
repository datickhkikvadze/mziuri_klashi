// !dom -> document obj model
// !getElementById -> აიდით იძახებს
// !getElementsByTagName -> თაგით იძახებს
// !getElementsByClassName -> კლასით იძახებს
// !querySelector -> ყველაფერს იძახებს
// !querySelectorAll -> ბევრს ერთად იძახებს
// !innerText -> მშობლებზეც არის და შვეილებზეც რა
// !innerContext-> როგორიც არის ისეთს აბრუნებს რა რა
// !innerHtml -> ყველა html ელემენტზეა რა

// const header = document.getElementById('head')
// console.log(header)

// const header1 = document.getElementsByTagName('h1')
// console.log(header1)

// const para_text = document.getElementsByClassName('text')
// console.log(para_text)

// const header = document.querySelector('h1')
// console.log(header)

// const header1 = document.querySelector('#head')
// console.log(header1)

// const header2 = document.querySelector('.first-title')
// console.log(header2)

// const all_header = document.querySelectorAll('h1')
// console.log(all_header)

// const lists = document.querySelector('ul')
// console.log(lists)


// const items = document.querySelectorAll('ul li')
// console.log(items)

// const para_text = document.getElementsByClassName('.text')
// console.log(para_text)

// const inner_text = para_text.innerText
// const text_content = para_text.text_content
// const inner_Html = para_text.text_content

// console.log(inner_text)
// console.log(text_content)


// const lists = document.querySelector('ul')
// console.log(lists)

// lists.innerHTML += '<li>milk</li>'



// ! getAttribute -> ამოწმებს არის თუ არა კონკ.ელემენტზე აიდი ან კლასი
// ! აქვს 1 პარ. ჩაშენებული


// ! setAttribute -> ამატებს დინამიურად აიდის ან კლასს
// ! აქვს 2 აუცილებლად შესასრულებელიჩაშენებული პარამეტრი


// const header = document.querySelector('h1')

// console.log (header.getAttribute('class'))

const header = document.querySelector('h1')

console.log (header.setAttribute('class','fH'))