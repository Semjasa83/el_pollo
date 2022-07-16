class MovableObject extends DrawableObject {

    speed = 0.2;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    bottleBarEnergy = 100;
    lasthit = 0;
    //objectMinY;

    /**
     * sets Gravitation Speed if a class is above the Ground
     */

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { //Throwable shut always fall
            return true;
        } else {
            return this.y < 190; //HÖHE BOSS EINSTELLEN
        }
    }

    /**
     * Animation for Walking -> Chicken, Boss, Charakter, Clouds etc.
     * 
     * @param {variable} images - is IMAGES__WALKING from other Classes 
     */

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 5 % 6;   --> % Mathematischer Rest -> 0, Rest 5  // i = 0, 1, 2, 3, 4, 5, 0, 1 usw.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 29; //for Jump Height
    }


    // Colliding for all usable
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    /* CHARACTER COLLISION*/

    hit() {
        this.energy -= 5; //dmg ratio for hit
        if (this.energy < 0) {
            this.energy = 0;
            this.died_sound.play();
        } else {
            this.lastHit = new Date().getTime();
            this.hurt_sound.play();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //differnece in s
        return timepassed < 1; //returns TRUE
    }

    isDead() {
        return this.energy == 0;
    }


    /* BOSS COLLISION */
    
    bossHit(){
        this.energy -= 25; //dmg ratio for hit
        console.log('boss hit', this.energy);
        if (this.energy < 0) {
            this.energy = 0;
            //this.died_sound.play(); //new sound needed TODO
        } else {
            this.lastHit = new Date().getTime();
            //this.hurt_sound.play(); //new sound needed TODO
        }
    }

    bossIsHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; //differnece in s
        return timepassed < 1; //returns TRUE
    }

    bossIsDead() {
        return this.energy == 0;
    }
}