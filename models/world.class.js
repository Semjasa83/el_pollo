
class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0; //verschieben der Spielwelt
    world_music = new Audio('audio/music1.mp3');

    /**
     * 
     * @param {HTML canvas} canvas - for drawing Canvas on HTML
     * @param {Key Eventlistener} keyboard - wait for Keydown and Keyup
     */

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld(); //um keyboad zu übergeben
    }

    /**
     * for hand over the Instanz 
     */

    setWorld() {
        this.character.world = this; 
    }

    loopBackgroundsToMap() {
        for (let j = 0; j < 8; j += 2) {
            for (let i = 0; i < this.level.backgroundObjects.length; i++) {
                const copy = Object.assign({}, this.level.backgroundObjects[i]);
                copy.x = copy.x + 719 * j;
                this.addToMap(copy);
            }}
        }

    /**
     *  correct Order for Z-Index on Canvas
     *  first Line, first Layer ....
     */

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0); //Ausschnitt verschieben
        this.loopBackgroundsToMap();
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);

        //this.world_music.play(); // Hintergrund Musik, muss noch leiser gemacht werden, irgendwie.

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * put objects into Canvas 
     * level.clouds / level. enemies etc.
     * 
     * @param {path} objects - all objects on Canvas
     */

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    /**
     * shown in addObjectsToMap "objects"
     * level.clouds / level.enemies
     * @param {path} mo - objects -> level.clouds / level.enemies etc. 
     */

    addToMap(mo) {
        if (mo.otherDirection) { //wird das object in eine andere Richtung bewegt?
            this.flipImage(mo);
        }
        this.drawImageObject(mo);
        this.drawFrame(mo);
        if (mo.otherDirection) { //if ctx has been changed, it is undone here
            this.flipImageBack(mo);
        }
    }

    drawImageObject(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

    /**
     * reactivate this Function in "addToMap" and here, if you want to optimize Collision
     * shows Frames around your Objects
     * add more Objects with || mo instanceof CLASS
     * @param {path} mo - path to your Classes in Level.class.js
     */
    drawFrame(mo) {
        if(mo instanceof Character || mo instanceof Chicken){
        this.ctx.beginPath();
        this.ctx.lineWidth = '1';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
        this.ctx.stroke();
        }
    }

    flipImage(mo) {
        this.ctx.save(); //save Pictures
        this.ctx.translate(mo.width, 0);//closes the gap at Canvas to Character 
        this.ctx.scale(-1, 1);//swap Pictures from Right to Left if needed
        mo.x = mo.x * -1; //swaps the x - coordinates
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}