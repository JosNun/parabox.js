# Parabox.js

Rotates your elements in 3D space based on your mouse position.

### [Demo on Codepen](https://codepen.io/FracturedLoop/full/VBXpbj/)

## Usage
### Install using NPM

```
npm install parabox.js
```

Then, just include it like any other module.

```
import parabox from 'parabox.js';
```

### In-browser
```html
  <!-- NOTE: for selecting specific versions (which you should ALWAYS do in production), see the docs on https://www.jsdelivr.com/ -->
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/parabox.js/dist/parabox.css">
  <script src="https://cdn.jsdelivr.net/npm/parabox.js/dist/parabox.js"></script>
```

### Or, use the files

First, download and build the files.
```bash
  git clone https://github.com/JosNun/parabox.js.git
  npm install
  npm run build
```

Then get the files from the `dist/` and put them in your project and link 'em up.

```html
  <link rel="stylesheet" type="text/css" href="./parabox/parabox.css">
  
  <script src="./parabox/parabox.js"></script>
```

```html
  // Optionally, if your environment supports ES modules, you can include Parabox.js as a module
  
  // Via CDN
  <script type="module">
    import parabox from 'https://cdn.jsdelivr.net/npm/parabox.js/dist/parabox.es.js';
  </script>
  
  // Or via file
  <script type="module">
    import parabox from './parabox.es.js';
  </script>
```

### HTML Structure

```html
<div class="parabox-container">
  <div class="parabox">
    <h1 class="parabox-shift">Hey there! I seem to stand out.</h1>
    <p>This content appears flat against the card</p>
  </div>
</div>
```

Each parabox needs to be inside a container with a [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective). The `parabox-container` class does this, and is provided for convenience, but is not necessary if another parent has a perspective.

Parabox children with the class `parabox-shift` will move based on the tilt of the parent parabox.

### Initialization

To get everything running, you just need to initialize parabox.
```
parabox.init();
```

If you add Parabox elements after initializing Parabox, you will need to rerun the init function for them to work.

### Options
#### Magnitude
The amount that a parabox element shifts can be adjusted by adding a magnitude value, either inline via data attributes, or with custom CSS properties. Supplying a negative number inverts the effect. Default value is 1.

```html
  <style>
    .magnified {
      --parabox-magnitude: 5;
    }
  </style>

  <div class="parabox">I'm a normal parabox</div>
  <div class="parabox" data-parabox-magnitude="5">The effect of your hover is magnified for me!</div>
  
  <div class="parabox magnified">The effect of your hover is also magnified for me!</div>
```

#### Height
Shifted elements can have their "height" adjusted, so they appear closer or further to the parabox when shifted. Negative values invert the element translation. Default is 5.

```html
  <style>
    .shiftier {
      --parabox-height: 10;
    }
  </style>

  <div class="parabox">
    <p class="parabox-shift">I'm a normal-height element.</p>
    <p class="parabox-shift shiftier">I appear to stand out further than my siblings!</p>
    <p class="parabox-shift" data-parabox-height="0">I appear to be flat against my parent. The same as not having a class of parabox-shift.</p>
  </div>
```

## Developing

Clone the repo
```
git clone https://github.com/JosNun/parabox.js.git
```

Install the dependencies 
```
npm install
```

Run the dev server to rebuild when the files in `src/` change.
```
npm run dev
```

Pull requests welcome :)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/JosNun/parabox.js/blob/master/License) file for more details.

