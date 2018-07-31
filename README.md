# Parabox.js

Rotates your elements in 3D space based on your mouse position.

## Installing

Clone the repo
```
  git clone https://github.com/JosNun/parabox.js.git
```

(Do the following only if you are planning on developing)  

Install the dependencies 
```
npm install
```

Run the dev server
```
npm run dev
```

## Usage
### Including files
```
  <link rel="stylesheet" type="text/css" href="./parabox/parabox.css">
  
  <script src="./parabox/parabox.js"></script>
```

### HTML Structure

```
<div class="parabox-container">
    <div class="parabox">
      <h1 class="parabox-shift">Hey there!</h1>
      <p>This content appears flat against the card</p>
    </div>
  </div>
```

Each parabox needs to be inside a container with a [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective). The `parabox-container` class does this, and is provided for convenience.

Parabox children with the class `parabox-shift` will move based on the tilt of the parent parabox.

### Initialization

To get everything running, you just need to initialize parabox.
```
parabox.init();
```

If you dynamically add parabox elements, you will need to reinitialize parabox for them to work.

### Contributing
Pull requests welcome :)

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for more details/

