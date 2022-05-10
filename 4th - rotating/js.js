var circlecontain = document.querySelector('.circle-container')
var open = document.querySelector('#open')
var close = document.querySelector("#close")
var nav = document.querySelector('nav')

open.addEventListener('click',()=>{
	circlecontain.classList.remove('close')
	circlecontain.classList.add('show')
	nav.classList.add('show')

})

close.addEventListener('click',()=>{
	circlecontain.classList.remove('show')
	circlecontain.classList.add('close')
	nav.classList.remove('show')


})