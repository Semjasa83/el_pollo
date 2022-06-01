let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas'); //canvas vom HTML zugewiesen;
    world = new World(canvas);

    
    console.log('My Character is', world.character); // oder world[`character`]

}