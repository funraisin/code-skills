(function() {
	console.log('Welcome here!');

	const imagesSection = document.querySelector('.imagesSection');

	//jQuery
	// const imagesSection = $('.imagesSection');

	if(imagesSection) {
		let html = '';

		for(i = 0; i < 32; i++) {
			html += `<img src="images/book-${i}.png" alt="Book ${i + 1}" />`;
		}

		imagesSection.innerHTML = html;
	}

})();

// JQuery
// $(function() {
// 	console.log('Welcome from JQuery!');
// });
