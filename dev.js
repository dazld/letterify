var letterify = require('./index');

letterify('h1.after');
letterify({
	selector: 'h2',
	segmentClass: 'futura other-letter'
});

document.querySelector('#app').classList.remove('hidden');

