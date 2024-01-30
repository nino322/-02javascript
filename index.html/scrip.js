const elLoginBox = document.querySelector('.login-box')
const elLoginShowBtn = document.querySelector('.login')
const elLoginCloseBtn = document.querySelector('.close-btn')

elLoginShowBtn.addEventListener('click', function(event){
  event.preventDefault()
  elLoginBox.classList.toggle('active')
})
elLoginCloseBtn.addEventListener('click', function(event){
  elLoginBox.classList.toggle('active')
})