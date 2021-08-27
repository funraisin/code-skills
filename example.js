(function() {
	console.log('Welcome!');

    let images = [];

    for(i = 0; i < 30; i++) {
		images += `<img src="./images/book-${i}.png" alt="Book ${i + 1}" />`;
    }

    const imageSection = document.querySelector('.imageSection');  // $('.images')

    imageSection.innerHTML = images;

	/* Comments */
	// const comments = [];
	// const commentSection = document.querySelector('.comments');  // $('.comments')
	// const submitButton = document.querySelector('button');  // $('button')
	// if(submitButton) {
	// 	submitButton.addEventListener('click', function() {
	// 		let html = '';
	// 		const comment = document.querySelector('.comment').value;  // $('.comment').val();

	// 		if(comment) {
	// 			comments.push(comment);

	// 			console.log('comment added ', comment);
	// 		}

	// 		comments.forEach(function(comment) {
	// 			html = `<p>${comment}</p>`;
	// 		})

	// 		commentSection.innerHTML = html;
	// 	})
	// }
})();