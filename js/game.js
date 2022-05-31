let canvas;
let ctx;

let world = new World();

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d'); //damit context über CTX im schnellzugriff ist // ctx ist standard dafür

    console.log('My Character is', world.character); // oder world[`character`]

}