const toggle = document.getElementById('toggle')
const container = document.querySelector('.container')

toggle.addEventListener('click',()=>{

	container.classList.toggle('active')

})