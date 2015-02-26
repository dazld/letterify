function letterify(userOptions) {
	var options = {
		scope: document,
		selector: false,
		segmentClass: 'letterified',
		parentClass: 'letterified-parent'
	};

	if (typeof userOptions === "string") {
		options.selector = userOptions;
	} else if (typeof userOptions === 'object') {
		Object.keys(userOptions).forEach(function(key) {
			options[key] = userOptions[key];
		});
	}


	var selected;

	if (!options.selector) {
		return false
	} else {
		selected = document.querySelector(options.selector);
	}

	selected.classList.remove(options.parentClass);

	var elems = options.scope.querySelectorAll(options.selector);

	[].forEach.call(elems, function(el) {

		var split = el.textContent.split('');
		var frag = document.createDocumentFragment();
		split.forEach(function(letter) {
			var span = document.createElement('span');
			span.textContent = letter;
			span.setAttribute('data-letter', letter);
			span.className = options.segmentClass;
			frag.appendChild(span);
		});
		el.textContent = null;
		el.appendChild(frag);
	});

	selected.classList.add(options.parentClass);

}

module.exports = letterify;
