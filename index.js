
function letterify(userOptions){
	var options = {
		selector: false
	};

	if (typeof userOptions === "string") {
		options.selector = userOptions;
	} else if (typeof userOptions === 'object') { 
		Object.keys(userOptions).forEach(function(key){
			options[key] = userOptions[key];
		});
	}


	var selected;

	if (!options.selector) {
		return false
	} else {
		selected = document.querySelector(options.selector);
	}
        console.log(options);
	var elems = document.querySelectorAll(options.selector);
        [].forEach.call(elems, function(el){
          var split = el.textContent.split('');
          console.log(split);
          var frag = document.createDocumentFragment();
          split.forEach(function(letter){
            var span = document.createElement('span');
            span.textContent = letter;
            span.setAttribute('data-letter', letter);
            span.className = 'letterified';
            frag.appendChild(span);
            
          });
          el.textContent = null;
          el.appendChild(frag);
        });

}

module.exports = letterify;
