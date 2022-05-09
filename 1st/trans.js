const ham = document.querySelector('.ham')

const links = document.querySelector('.headlink')


ham.addEventListener('click',() =>{
	ham.classList.toggle('active');
	links.classList.toggle('active');


})


//scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click',function(e){
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior:'smooth'
		});

	});

});
