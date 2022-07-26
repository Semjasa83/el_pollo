
class World {

    character = new Character();
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    collectableObjects = [];
    camera_x = 0; //verschieben der Spielwelt
    level = level1;
    canvas;
    ctx;
    keyboard;
    endScreen;
    world_music = new Audio('audio/music1.mp3');
    chicken_kill_sound = new Audio('audio/chicken.mp3');
    cooldown = false;
    ammo = [];
    coin = [];

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
        this.gameCheckRate();
    }

    /**
     * for hand over the Instance 
     */
    setWorld() {
        this.character.world = this;
    }

    /******* MAIN FUNCTIONS *******/

    /**
     *  Draws the all Objects into the Canvas
     *  info: correct Order for Z-Index on Canvas first Line, first Layer ....
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addedObjects();
        this.addFixedStatusBars();
        this.addToMap(this.character);
        this.addedWorldMusic();
        this.ctx.translate(-this.camera_x, 0);
        if (this.endScreen) {
            this.addToMap(this.endScreen);
        }
        let self = this;        //loop function to animate
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * checks Collisions for Items at short Interval
     */
    gameCheckRate() {
        setInterval(() => {
            this.openEndscreen();
            this.bottleCollision();
            this.coinCollision();
            this.chickenCollisionsWithBottle();
        }, 50);
    }

    addedWorldMusic() {
        this.world_music.volume = 0.2; //set Volume for Music
        this.world_music.play();
    }

    addedObjects() {
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
        if (mo.otherDirection) { //if move object to other Direction
            this.flipImage(mo);
        }
        this.drawImageObject(mo);
        //this.drawOffsetFrame(mo);
        if (mo.otherDirection) { //if ctx has been changed, it is undone here
            this.flipImageBack(mo);
        }
    }

    drawImageObject(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }


    openEndscreen() {
        if (world.character.isDead() || world.level.enemies[0].bossIsDead()) {
            this.endScreen = new Endscreen();
            setTimeout(() => {
                world.level.enemies[0].stopEndboss();
                world.level.enemies.forEach((enemy) => {
                    if (enemy instanceof Chicken) {
                        enemy.stopChicken();
                    }
                })
            }, 800);
            this.stopWorldMusic();
            this.killButtonsOnDead()
        }
    }

    stopWorldMusic() {
        this.world_music.pause();
        this.world_music.currentTime = 0;
    }

    killButtonsOnDead() {
        if (this.character.isDead()) {
            this.keyboard = false;
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


    addFixedStatusBars() {
        this.ctx.translate(-this.camera_x, 0);
        // ----- Space for fixed objects ------
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camera_x, 0);
    }

    /******* COLLISIONS *******/

    /**
     * reactivate this Function in "addToMap" and here, if you want to optimize Collision
     * shows Frames around your Objects
     * add more Objects with || mo instanceof CLASS
     * @param {movableObjects} mo - path to your Classes in Level.class.js
     */
    drawOffsetFrame(mo) {
        if (mo instanceof Character || mo instanceof Chicken || mo instanceof Bottles || mo instanceof Coins || mo instanceof Endboss) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '1';
            this.ctx.strokeStyle = 'red';
            this.ctx.rect(mo.x + mo.offset.left, mo.y + mo.offset.top, mo.width - mo.offset.right, mo.height - mo.offset.bottom);
            this.ctx.stroke();
        }
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
    }

    checkThrowObjects() {
        if (this.keyboard.D && world.ammo.length > 0 && this.cooldown == false) {
            this.cooldown = true;
            let bottle = new ThrowableObject(this.character.x + 70, this.character.y + 110);
            this.throwableObjects.push(bottle);
            world.ammo.splice(-1);
            this.bottleBar.removeBottle();
            this.bottleBar.setPercentage();
            setTimeout(() => {
                this.cooldown = false
            }, 1000);
        }

    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead()) {
                if (world.character.y < 190) {
                    enemy.energy -= 1;
                    if (enemy.isDead()) {
                        this.chicken_kill_sound.play();
                    }
                } else {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });
    }


    chickenCollisionsWithBottle() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach(bottle => {
                if (enemy.isColliding(bottle)) {
                    if (enemy instanceof Endboss) {
                        enemy.bossHit();
                    } else {
                        enemy.energy -= 1;
                    }
                }
            });
        });
    }

    bottleCollision() {
        this.level.bottles.forEach((bottle, index) => {
            if (bottle.width > 0 && bottle.height > 0) {
                if (this.character.isColliding(bottle)) {
                    this.bottleBar.collectBottle();
                    this.bottleBar.setPercentage(this.bottleBar.percentage);
                    this.collectedBottles(1);
                    this.level.bottles.splice(index, 1);
                }
            }
        })
    }

    /**
     * Bottle Count for Ammunition
     * @param {count} amount - of Bottles collectec 
     */
    collectedBottles(amount) {
        this.ammo.push(amount);
    }

    coinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (coin.width > 0 && coin.height > 0) {
                if (this.character.isColliding(coin)) {
                    this.coinBar.collectCoin();
                    this.coinBar.setPercentage(this.coinBar.percentage);
                    this.collectedCoins(1);
                    this.level.coins.splice(index, 1);
                    //console.log(this.coinBar.percentage);
                }
            }
        })
    }

    /**
     * Coin Count for healing
     * @param {count} amount - of Coins collected 
     */
    collectedCoins(amount) {
        this.coin.push(amount);
    }

    /**
     * shows and creates the Background 
     * add j < 10 only at +2 values!!!
     */
    loopBackgroundsToMap() {
        for (let j = 0; j < 10; j += 2) {
            for (let i = 0; i < this.level.backgroundObjects.length; i++) {
                const copy = Object.assign({}, this.level.backgroundObjects[i]);
                copy.x = copy.x + 719 * j;
                this.addToMap(copy);
            }
        }
    }
}