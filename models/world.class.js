class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
    ];

    //.... -> =0
    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard)  {
        this.ctx = canvas.getContext('2d'); 
        this.canvas = canvas; 
        this.keyboard = keyboard;
        this.draw();
        this.setWorld(); //um keyboad zu übergeben
    }

    setWorld() {
        this.character.world = this; //nur this um die Instanz zu übergeben
    }

/**
 *  correct Order for Z-Index on Canvas
 *  first Line, first Layer ....
 */

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        let self = this; 
        requestAnimationFrame(function() { 
            self.draw(); 
    });
    }

    addObjectsToMap(objects){
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}