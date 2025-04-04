const hamburger = document.getElementById('hamburger')
const sidebar = document.querySelector('.sidebar')
const line1 = document.getElementById('item1')
const line2 = document.getElementById('item2')
const line3 = document.getElementById('item3')
const body = document.body

let isOpen = 0

hamburger.addEventListener("click", function() {
  isOpen++
  
  if (isOpen % 2 == 0) {
    sidebar.style.left = '-250px'
  } else {
    sidebar.style.left = '0px'
  }

  if (isOpen % 2 != 0) { 
    line1.style.transform = 'rotate(45deg)'
    line1.style.top = '10px'
    line3.style.transform = 'rotate(-45deg)'
    line3.style.bottom = '10px'
    line2.style.opacity = '0'
  } else {
    line1.style.transform = 'rotate(0deg)'
    line1.style.top = '0'
    line3.style.transform = 'rotate(0deg)'
    line3.style.bottom = '0'
    line2.style.opacity = '1'
  }
})
