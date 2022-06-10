let canvas;
let world;
let keyboard = new Keyboard();

/**
 * Initialisation from Canvas on HTML
 */
function init() {
    canvas = document.getElementById('canvas'); 
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character); // oder world[`character`]
}

/**
 * Key Eventlistener for movement by Character Pepe
 * 
 * @param {} e - Keyboard Eventlistener at Keydown / Keyup
 */

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 39 ) {
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37 ) {
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38 ) {
        keyboard.UP = true;
    }

    if(e.keyCode == 40 ) {
        keyboard.DOWN = true;
    }

    if(e.keyCode == 32 ) {
        keyboard.SPACE = true;
    }

    console.log(e);
});

document.addEventListener('keyup', (e) => {
    if(e.keyCode == 39 ) {
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37 ) {
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38 ) {
        keyboard.UP = false;
    }

    if(e.keyCode == 40 ) {
        keyboard.DOWN = false;
    }

    if(e.keyCode == 32 ) {
        keyboard.SPACE = false;
    }

    console.log(e);
});