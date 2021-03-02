const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	close = menu.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
	menu.classList.add('active')
})

close.addEventListener('click', () => {
	menu.classList.remove('active')
})

const percentBlocks = document.querySelectorAll('.skills__exp-percent')
	lines = document.querySelectorAll('.skills__exp-actual')

percentBlocks.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
})
