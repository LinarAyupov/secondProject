
//Header scroll
(function (){

	const header = document.querySelector('.header');
	window.onscroll = ()=>{
		if(window.pageYOffset > 50) {
			header.classList.add('header__active');
		} 
		else {
			header.classList.remove('header__active');
		}
	}
}());


//Header handler

(function() {

	const burgerItem= document.querySelector('.burger');
	const menuItem = document.querySelector('.header__nav');

	const burgerCloseItem = document.querySelector('.header__nav-close');

	burgerItem.addEventListener('click', () => {
		menuItem.classList.add('header__nav-active');
	})

	burgerCloseItem.addEventListener('click', () => {
		menuItem.classList.remove('header__nav-active');
	})
}());

//Smooth scroll 
(function(){

const anchors = document.querySelectorAll('.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    let blockElement= document.querySelector(blockID)
    let headerElHeight =  document.querySelector('.header').clientHeight;
    let elem = blockElement.offsetTop - headerElHeight;

      window.scroll({
            top: elem, 
            left: 0, 
            behavior: 'smooth' 
        });
  	});
	}
}());
