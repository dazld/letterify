[![npm version](https://badge.fury.io/js/letterify.svg)](http://badge.fury.io/js/letterify)


# Letterify

![letterify](https://raw.githubusercontent.com/dazld/letterify/master/letterify.png)

Inspired by lettering.js - a commonJS, browserifiable module for doing radical web typography

## What's different here?

There are quite a few packages available that will split text into a series of spans. `letterify` has one enhancement - it adds a custom attribute to the created spans which is the content inside it. This means that you can target particular letters, or letter pairs, other combinations etc, with css.

As an example, this means you can kern letter pairs quite easily in css, like so:

```

<style type="text/css">
    [data-letter="Y"] + [data-letter="o"] {
        letter-spacing: -0.1rem;
    }
</style>

<!-- before -->
<h1>Yo</h1>

<!-- after letterifying -->
<h1 class="letterified-parent">
    <span data-letter="Y" class="letterified">Y</span>
    <span data-letter="o" class="letterified">o</span>
</h1>

<!-- Whitespace above is just for clarity here, in the document there is no additional whitespace -->

```

You can see a more elaborated demo on [codepen](http://codepen.io/dazld/pen/VYdZYN), combining fades and animations.

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
