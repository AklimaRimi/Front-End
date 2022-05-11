// const labels = document.querySelectorAll('label')
const label = document.querySelector('.label1')
const input1 = document.querySelector('.text')
const label2 = document.querySelector('.label2')
const input2 = document.querySelector('.password')

// labels.forEach(label =>{
// 	label.innerHTML = label.innerText
// 	.split('')
// 	.map((letter,idx) =>`<span>${letter}</span>`)
// 	.join('')


// })

input1.addEventListener('click',() =>{
	label.classList.add('active')
})

input2.addEventListener('click',() =>{
	label2.classList.add('active')
})