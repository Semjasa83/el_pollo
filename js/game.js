let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
    document.getElementById("startscreen_img").classList.add("hide");
    document.getElementById("gameStartButton").classList.add("hide");
    document.getElementById("title").classList.add("hide");
    document.getElementById("gameArea").classList.remove("hide");
    document.getElementById("canvas").classList.remove("hide");
    document.getElementById("controlPanel").classList.remove("hide");
    init();
}

/**
 * Initialisation from Canvas on HTML
 * load the World on Canvas
 */
function init() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character); // oder world[`character`]
    //fullscreen();
}

function fullscreen() {
    canvas = document.getElementById('canvas');
    canvas.requestFullscreen();
}

/**
 * Key Eventlistener for movement by Character Pepe
 * 
 * @param {} e - Keyboard Eventlistener at Keydown / Keyup
 */

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    //console.log(e);
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
    //console.log(e);
});


document.getElementById('btnleft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    LEFT = true;
});
document.getElementById('btnleft').addEventListener('touchend', (e) => {
    e.preventDefault();
    LEFT = false;
});

document.getElementById('btnright').addEventListener('touchstart', (e) => {
    e.preventDefault();
    RIGHT = true;
});
document.getElementById('btnright').addEventListener('touchend', (e) => {
    e.preventDefault();
    RIGHT = false;
});

document.getElementById('btnjump').addEventListener('touchstart', (e) => {
    e.preventDefault();
    UP = true;
});
document.getElementById('btnjump').addEventListener('touchend', (e) => {
    e.preventDefault();
    UP = false;
});

document.getElementById('btnthrow').addEventListener('touchstart', (e) => {
    e.preventDefault();
    D = true;
});
document.getElementById('btnthrow').addEventListener('touchend', (e) => {
    e.preventDefault();
    D = false;
});