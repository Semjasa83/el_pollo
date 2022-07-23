let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
    document.getElementById("startscreen_img").classList.add("hide");
    document.getElementById("gameStartButton").classList.add("hide");
    document.getElementById("game-guide-container").classList.add("hide");
    document.getElementById("title").classList.add("hide");
    document.getElementById("canvas").classList.remove("hide");
    init();
}

/**
 * Initialisation from Canvas on HTML
 * load the World on Canvas
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

    if(e.keyCode == 68 ) {
        keyboard.D = true;
    }
    //console.log(e);
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

    if(e.keyCode == 68 ) {
        keyboard.D = false;
    }
    //console.log(e);
});