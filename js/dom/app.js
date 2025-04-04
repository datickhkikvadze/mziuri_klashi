// const modal = document.getElementById('modal')
// const openModalBtn = document.getElementById('openModalBtn')
// const closeModalBtn = document.getElementById('closeModalBtn')

// openModalBtn.addEventListener('click', function() {
//   modal.style.display = "block";
// })

// closeModalBtn.addEventListener('click', function() {
//   modal.style.display = "none";
// })

const modal = document.getElementById('modal')
const openModalBtn = document.getElementById('openModalBtn')
const closeModalBtn = document.getElementById('closeModalBtn')


openModalBtn.addEventListener('click', function() {
  modal.classList.add('open')
})


closeModalBtn.addEventListener('click', function() {
  modal.classList.remove('open')
})


