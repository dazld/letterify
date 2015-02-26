# Letterify

![letterify](https://raw.githubusercontent.com/dazld/letterify/master/letterify.png)

Inspired by lettering.js - a commonJS, browserifiable module for doing radical web typography

## API

```js

var letterify = require('letterify');

// transforms all textcontent in H1 tags in the document to be a series of spans
// where each span has an attribute for the letter it contains
letterify('h1'); 

// using custom options

var heading = document.querySelector('header.main'); // or something

letterify({
    scope: heading, // reference to the element in which we want to search
    selector: 'h1', // selector which we would like to transform
    segmentClass: 'lfy', // class which spans inside selector will have
    parentClass: 'lfy-parent' // class applied to matches found for the selector
});

```

The parentClass css class is removed before transformation, and re-applied once content has been changed.

Content is found via the `textContent` attribute of an element.

Original content is entirely removed, and replaced by `<span>`s.
