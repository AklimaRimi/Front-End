const progress = document.getElementById('progress'),
	prev = document.getElementById('prev'),
	next = document.getElementById('next')
	circles  = document.querySelectorAll('.circle')


let active =1


next.addEventListener('click' , () =>{
	active++
	if(active>=4){
		active=4

	}
	update()
})
prev.addEventListener('click',() =>{
	active--
	if(active<=1){
		active=1

	}

	update()
	
})

function update(){
	circles.forEach((circle,idx) => {
		if(idx<active){
			circle.classList.add('active')
		}
		else{
			circle.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.active')

	progress.style.width = ((((actives.length -1) /3)*100)-5) + '%'

	if(active === 1){
		prev.disabled = true;
	}
	else{
		prev.disabled = false
	}
	if(active === 4){
		next.disabled = true
	}
	else{
		next.disabled = false
	}


}
