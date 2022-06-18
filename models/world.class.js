
class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0; //verschieben der Spielwelt
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    collectableObjects = [];
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
        this.run();
    }

    /**
     * for hand over the Instanz 
     */

    setWorld() {
        this.character.world = this; 
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        },200);
    }

    checkThrowObjects() {
        if(this.keyboard.D){
            let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 110);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                //console.log('Collision with Character, energy ', this.character.energy)
            }
        });
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
        this.ctx.translate(this.camera_x, 0);
        this.addedObjects();
        this.addFixedStatusBars();
        this.addToMap(this.character);
        this.addedWorldMusic();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addFixedStatusBars() {
        this.ctx.translate(-this.camera_x, 0);
        // ----- Space for fixed objects ------
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);
    }

    addedWorldMusic() {
        this.world_music.volume = 0.35; //set Volume for Music
        this.world_music.play(); 
    }

    addedObjects () {
        this.loopBackgroundsToMap();
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.collectableObjects);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
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
        if(mo instanceof Character || mo instanceof Chicken || mo instanceof Bottles || mo instanceof Coins || mo instanceof Endboss){
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