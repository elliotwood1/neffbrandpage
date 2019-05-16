import navInit from '@ao-internal/marketing-globals/modules/AoStickyNav';

navInit('#AoStickyNav');

const paginationContainer = document.querySelector('.pagination-container');
const carouselOuter = document.querySelector('.carousel-outer');

const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const slide4 = document.getElementById('slide4');

const slideSelect = slide => {
	let slideArray = [slide1, slide2, slide3, slide4];

	for (let i = 0; i < slideArray.length; i++) {
		if (slide === slideArray[i]) {
			slide.classList.add('current');
		} else {
			slideArray[i].classList.remove('current');
			carouselOuter.style.display = 'hidden';
		}
	}
};

paginationContainer.addEventListener('click', function(e) {
	if (e.target.hasAttribute('data-slide-number')) {
		console.log(e.target.getAttribute('data-slide-number'));
		switch (e.target.getAttribute('data-slide-number')) {
			case '1':
				carouselOuter.style.transform = 'translateX(0)';
				slideSelect(slide1);
				break;
			case '2':
				carouselOuter.style.transform = 'translateX(-100vw)';
				slideSelect(slide2);
				break;
			case '3':
				carouselOuter.style.transform = 'translateX(-200vw)';
				slideSelect(slide3);
				break;
			case '4':
				carouselOuter.style.transform = 'translateX(-300vw)';
				slideSelect(slide4);
				break;
			default:
				carouselOuter.style.transform = 'translateX(0)';
				slide1.classList.add('current');
		}
	}
});
