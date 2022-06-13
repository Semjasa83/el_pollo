
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
     * 
     * @param {*} objects - all objects on Canvas
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    /**
     * adds to Map / Canvas all Inputs from Movable-Objects.class.js
     * 
     * @param {*} mo - movable-object 
     */
    addToMap(mo) {
        if (mo.otherDirection) { //wird das object in eine andere Richtung bewegt?
            this.flipImage(mo);
        }
        mo.drawObjects(this.ctx);
        //this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        mo.drawFrame(this.ctx);
        /*
        this.ctx.beginPath();
        this.ctx.lineWidth = '1';
        this.ctx.strokeStyle = 'blue';
        this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
        this.ctx.stroke();
*/

        if (mo.otherDirection) { //if ctx has been changed, it is undone here
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

    flipImage(mo) {
        this.ctx.save(); //save Pictures
        this.ctx.translate(mo.width, 0);//closes the gap at Canvas to Character 
        this.ctx.scale(-1, 1);//swap Pictures from Right to Left if needed
        mo.x = mo.x * -1; //swaps the x - coordinates
    }
}