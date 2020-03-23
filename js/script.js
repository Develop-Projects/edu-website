// Coded By ...

/* FOR NAVIGATION DYNAMICS */
const nav = document.querySelector('#nav');
const banner = document.querySelector('#main-header');
const prefix = document.querySelector('#main-header-banner');
const intro = document.querySelector('#intro');

// check the scroll
addEventListener('scroll', (event) => {
	console.log("Getting there");
	console.log(scrollY + ' : ' + innerHeight);
	
	if (scrollY > (innerHeight - 100)) {
		console.log(true);
		nav.classList.add('main-bg');
		nav.classList.remove('opacity');
	} else {
		nav.classList.remove('main-bg');
		if (scrollY > 100) {
			nav.classList.add('opacity');
		} else {
			nav.classList.remove('opacity');
		}
	}

	
});